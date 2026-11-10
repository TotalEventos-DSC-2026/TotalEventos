import assert from 'node:assert/strict';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { after, before, test } from 'node:test';
import type { AddressInfo } from 'node:net';
import { Test } from '@nestjs/testing';
import type { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';

const directory = mkdtempSync(join(tmpdir(), 'red-issue-36-'));
process.env.DATABASE_PATH = join(directory, 'test.sqlite');
let app: INestApplication | undefined;
let baseUrl: string;

before(async () => {
  const moduleRef = await Test.createTestingModule({ imports: [AppModule] }).compile();
  app = moduleRef.createNestApplication();
  await app.listen(0, '127.0.0.1');
  const address = app.getHttpServer().address() as AddressInfo;
  baseUrl = `http://127.0.0.1:${address.port}`;
});

after(async () => {
  await app?.close();
  rmSync(directory, { recursive: true, force: true });
});

test('consulta pública não inclui evento em rascunho', async () => {
  const create = await fetch(`${baseUrl}/eventos`, {
    method: "POST", headers: { "content-type": "application/json" },
    body: JSON.stringify({ titulo: "Rascunho RED UC02-03", descricao: "Evento não publicado", dataInicio: "2030-02-10T09:00:00.000Z", dataFim: "2030-02-10T18:00:00.000Z", espacoFisicoId: "espaco-red-36" }),
  });
  assert.equal(create.status, 201);
  const listing = await fetch(`${baseUrl}/eventos/publicos`);
  assert.equal(listing.status, 200);
  assert.doesNotMatch(await listing.text(), /Rascunho RED UC02-03/);
});

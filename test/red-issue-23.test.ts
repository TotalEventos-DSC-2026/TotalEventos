import assert from 'node:assert/strict';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { after, before, test } from 'node:test';
import type { AddressInfo } from 'node:net';
import { Test } from '@nestjs/testing';
import type { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';

const directory = mkdtempSync(join(tmpdir(), 'red-issue-23-'));
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

test('evento válido publicado fica visível na consulta pública', async () => {
  const create = await fetch(`${baseUrl}/eventos`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      titulo: 'Evento RED UC02',
      descricao: 'Cenário RED de publicação pública',
      dataInicio: '2030-01-10T09:00:00.000Z',
      dataFim: '2030-01-10T18:00:00.000Z',
      espacoFisicoId: 'espaco-red-23',
    }),
  });
  assert.equal(create.status, 201);
  const evento = await create.json() as { id: string };
  assert.ok(evento.id);

  const publish = await fetch(`${baseUrl}/eventos/${evento.id}/publicacao`, { method: 'PATCH' });
  assert.equal(publish.status, 200);

  const listing = await fetch(`${baseUrl}/eventos/publicos`);
  assert.equal(listing.status, 200);
  assert.match(await listing.text(), /Evento RED UC02/);
});

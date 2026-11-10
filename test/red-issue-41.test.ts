import assert from 'node:assert/strict';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { after, before, test } from 'node:test';
import type { AddressInfo } from 'node:net';
import { Test } from '@nestjs/testing';
import type { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';

const directory = mkdtempSync(join(tmpdir(), 'red-issue-41-'));
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

test('endpoint de inscrição aceita uma solicitação válida', async () => {
  const response = await fetch(`${baseUrl}/eventos/evt-red-41/inscricoes`, {
    method: "POST", headers: { "content-type": "application/json" },
    body: JSON.stringify({ participanteId: "participante-red-41", sessaoId: "sessao-red-41" }),
  });
  assert.equal(response.status, 201);
});

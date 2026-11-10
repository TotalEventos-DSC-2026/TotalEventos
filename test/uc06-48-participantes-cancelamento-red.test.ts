import assert from 'node:assert/strict';
import { rmSync } from 'node:fs';
import { join } from 'node:path';
import { after, before, test } from 'node:test';
import type { AddressInfo } from 'node:net';
import { Test } from '@nestjs/testing';
import type { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';

const databasePath = join(process.cwd(), 'test', '.red-uc06-48.sqlite');
let app: INestApplication | undefined;
let baseUrl: string;
const getApp = (): INestApplication => {
  if (!app) throw new Error('Aplicacao E2E ainda nao foi iniciada.');
  return app;
};

before(async () => {
  process.env.DATABASE_PATH = databasePath;
  const moduleRef = await Test.createTestingModule({ imports: [AppModule] }).compile();
  app = moduleRef.createNestApplication();
  await app.listen(0, '127.0.0.1');
  const address = getApp().getHttpServer().address() as AddressInfo;
  baseUrl = `http://127.0.0.1:${address.port}`;
});

after(async () => {
  await app?.close();
  for (const suffix of ['', '-shm', '-wal']) rmSync(`${databasePath}${suffix}`, { force: true });
});

test('cancelamento de evento inicia o tratamento de participantes', async () => {
  const response = await fetch(`${baseUrl}/eventos/evento-uc06-48/cancelar`, { method: 'POST' });
  assert.ok([200, 204].includes(response.status), `Esperava sucesso da proposta de cancelamento, recebeu ${response.status}`);
});
import assert from 'node:assert/strict';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { after, before, test } from 'node:test';
import type { AddressInfo } from 'node:net';
import { Test } from '@nestjs/testing';
import type { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';

const directory = mkdtempSync(join(tmpdir(), 'red-issue-34-'));
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

test('evento existente pode ser publicado pela rota de publicação', async () => {
  const response = await fetch(`${baseUrl}/eventos/evt-red-34/publicacao`, { method: "PATCH" });
  assert.equal(response.status, 200);
});

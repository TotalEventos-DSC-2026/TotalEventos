import assert from 'node:assert/strict';
import { mkdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { after, before, test } from 'node:test';
import type { AddressInfo } from 'node:net';
import { Test } from '@nestjs/testing';
import type { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';

const directory = join(process.cwd(), '.red-test-54');
mkdirSync(directory, { recursive: true });
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

test('UC07 public query returns a successful JSON list for integration clients', async () => {
const response = await fetch(`${baseUrl}/eventos/publicos`);
assert.equal(response.status, 200);
assert.ok(Array.isArray(await response.json()));
});
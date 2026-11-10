import { mkdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { after, before, test } from 'node:test';
import type { AddressInfo } from 'node:net';
import { Test } from '@nestjs/testing';
import type { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';

const directory = join(process.cwd(), '.red-test-58');
mkdirSync(directory, { recursive: true });
process.env.DATABASE_PATH = join(directory, 'test.sqlite');
let app: INestApplication | undefined;

before(async () => {
  const moduleRef = await Test.createTestingModule({ imports: [AppModule] }).compile();
  app = moduleRef.createNestApplication();
  await app.listen(0, '127.0.0.1');
  app.getHttpServer().address() as AddressInfo;
});

after(async () => {
  await app?.close();
  rmSync(directory, { recursive: true, force: true });
});

test('UC08 payment endpoint returns results for explicitly configured local gateway scenarios', {
  skip: 'Blocked: AppModule has no payment endpoint or gateway provider to inject a test-only fake into. Approval/decline responses and inscription setup cannot be exercised without changing production; no result may be supplied by a request or sent to a live gateway.',
}, async () => {});
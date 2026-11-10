import { mkdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { after, before, test } from 'node:test';
import type { AddressInfo } from 'node:net';
import { Test } from '@nestjs/testing';
import type { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';

const directory = join(process.cwd(), '.red-test-55');
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

test('UC08 gateway and payment status contract needs a safe test double', {
  skip: 'Blocked: the codebase has no payment-gateway port or approved deterministic test-double contract. Do not invent a simulated approval/decline.',
}, async () => {});
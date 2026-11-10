import assert from 'node:assert/strict';
import { mkdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { after, before, test } from 'node:test';
import type { AddressInfo } from 'node:net';
import { Test } from '@nestjs/testing';
import type { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';

const directory = join(process.cwd(), '.red-test-53');
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

test('UC07 public-query DTO serializes the essential event fields', async () => {
const create = await fetch(`${baseUrl}/eventos`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ titulo: 'Evento RED', descricao: 'Fixture', dataInicio: '2026-12-01T10:00:00.000Z', dataFim: '2026-12-01T12:00:00.000Z', espacoFisicoId: 'espaco-red' }) });
assert.equal(create.status, 201, 'setup prerequisite POST /eventos must succeed before checking the public DTO');
const created = await create.json() as { id?: string; eventoId?: string };
const eventId = created.id ?? created.eventoId;
assert.ok(eventId);
const response = await fetch(`${baseUrl}/eventos/publicos?eventoId=${encodeURIComponent(eventId)}`);
assert.equal(response.status, 200);
const items = await response.json() as Array<Record<string, unknown>>;
assert.ok(items.length > 0);
for (const field of ['eventoId', 'titulo', 'data', 'sala', 'vagasDisponiveis', 'visibilidade']) assert.ok(field in items[0], `missing public DTO field ${field}`);
});
import assert from 'node:assert/strict';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { test } from 'node:test';
import type { AddressInfo } from 'node:net';
import { Test } from '@nestjs/testing';
import { AppModule } from '../src/app.module';

test('evento criado pode ser recuperado pela consulta persistida', async () => {
  const directory = mkdtempSync(join(tmpdir(), 'totaleventos-evento-persistencia-'));
  process.env.DATABASE_PATH = join(directory, 'test.sqlite');
  const module = await Test.createTestingModule({ imports: [AppModule] }).compile();
  const app = module.createNestApplication();

  try {
    await app.listen(0, '127.0.0.1');
    const address = app.getHttpServer().address() as AddressInfo;
    const baseUrl = `http://127.0.0.1:${address.port}`;
    const created = await fetch(`${baseUrl}/eventos`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        titulo: 'Evento persistido',
        descricao: 'Consulta após criação',
        dataInicio: '2027-01-15T10:00:00.000Z',
        dataFim: '2027-01-15T18:00:00.000Z',
        espacoFisicoId: '550e8400-e29b-41d4-a716-446655440000',
      }),
    });

    assert.equal(created.status, 201);
    const evento = await created.json() as { id: string; titulo: string };
    const retrieved = await fetch(`${baseUrl}/eventos/${evento.id}`);

    assert.equal(retrieved.status, 200);
    assert.equal((await retrieved.json() as { titulo: string }).titulo, evento.titulo);
  } finally {
    await app.close();
    rmSync(directory, { recursive: true, force: true });
  }
});

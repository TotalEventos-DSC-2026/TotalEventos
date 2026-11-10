import assert from 'node:assert/strict';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { test } from 'node:test';
import type { AddressInfo } from 'node:net';
import { Test } from '@nestjs/testing';
import { AppModule } from '../src/app.module';

test('POST /eventos aceita evento válido e responde com status 201', async () => {
  const directory = mkdtempSync(join(tmpdir(), 'totaleventos-eventos-'));
  process.env.DATABASE_PATH = join(directory, 'test.sqlite');
  const module = await Test.createTestingModule({ imports: [AppModule] }).compile();
  const app = module.createNestApplication();

  try {
    await app.listen(0, '127.0.0.1');
    const address = app.getHttpServer().address() as AddressInfo;
    const response = await fetch(`http://127.0.0.1:${address.port}/eventos`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        titulo: 'Conferência TotalEventos',
        descricao: 'Evento de demonstração',
        dataInicio: '2027-01-15T10:00:00.000Z',
        dataFim: '2027-01-15T18:00:00.000Z',
        espacoFisicoId: '550e8400-e29b-41d4-a716-446655440000',
      }),
    });

    assert.equal(response.status, 201);
  } finally {
    await app.close();
    rmSync(directory, { recursive: true, force: true });
  }
});

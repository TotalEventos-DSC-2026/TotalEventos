# 04-04 — Especificação do Teste RED

## Critério selecionado
Para uma solicitação válida de criação de evento, `POST /eventos` deve responder HTTP 201 (CA05 do planejamento UC05; relacionado ao CA01, criação de evento com data futura em rascunho).

## Nível e tecnologia
Teste de integração HTTP: inicializa o `AppModule` Nest e envia uma requisição real em porta local efêmera. O banco SQLite usa arquivo temporário. Stack: TypeScript, `node:test`, `node:assert/strict` e `@nestjs/testing`.

## Arquivo
`test/eventos.test.ts`

```typescript
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
```

## Limite deliberado
O contrato de retorno não define o formato do corpo; o teste não inventa esse formato e verifica somente o status HTTP planejado. Ele não comprova persistência durável nem o estado de rascunho em uma leitura posterior; esses pontos exigem contratos e testes adicionais.

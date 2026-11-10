# 04-05 — Evidências do TDD RED

## Comando executado

```powershell
npm run build; if ($LASTEXITCODE -eq 0) { node --test dist/test/eventos.test.js }
```

## Saída observada

```text
npm notice run totaleventos@1.0.0 build
npm notice run tsc -p tsconfig.json
✖ POST /eventos aceita evento válido e responde com status 201 (1338.0329ms)
ℹ tests 1
ℹ suites 0
ℹ pass 0
ℹ fail 1
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 3669.0543

✖ failing tests:

test at dist\test\eventos.test.js:13:22
✖ POST /eventos aceita evento válido e responde com status 201 (1338.0329ms)
  AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:

  404 !== 201

      at TestContext.<anonymous> (C:\Users\Habner\Documents\GitHub\ProjetoDSC\TotalEventos\dist\test\eventos.test.js:32:26)
      at process.processTicksAndRejections (node:internal/process/task_queues:104:5)
      at async Test.run (node:internal/test_runner/test:1409:7)
      at async startSubtestAfterBootstrap (node:internal/test_runner/harness:387:3) {
    generatedMessage: true,
    code: 'ERR_ASSERTION',
    actual: 404,
    expected: 201,
    operator: 'strictEqual',
    diff: 'simple'
  }
```

O teste foi executado porque o build do comando condicional terminou com sucesso. Uma execução independente de `npm run build` também foi confirmada com `BUILD_EXIT_CODE=0`.

## Análise
O TypeScript compilou e a aplicação Nest iniciou. A falha aconteceu na asserção funcional: a requisição HTTP recebeu 404 porque não existe rota `POST /eventos` registrada no `AppModule`; o contrato planejado para uma criação válida espera 201. Não é erro de sintaxe, dependência ou runner.

## Testes preexistentes
Comando: `node --test dist/test/check-in.test.js dist/test/e2e.test.js dist/test/server.test.js`

Resultado real: 18 testes aprovados, 0 falhas. O teste RED foi executado isoladamente para preservar a evidência da falha esperada.

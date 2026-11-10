# 04-05 — Evidências do TDD RED

## Comando

```powershell
npm run build; if ($LASTEXITCODE -eq 0) { node --test dist/test/evento-entity-red.test.js }
```

## Saída real

```text
npm notice run totaleventos@1.0.0 build
npm notice run tsc -p tsconfig.json
✖ criação representa o evento inicialmente como rascunho (861.388ms)
ℹ tests 1
ℹ suites 0
ℹ pass 0
ℹ fail 1
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 2841.5065

✖ failing tests:

test at dist\test\evento-entity-red.test.js:13:22
✖ criação representa o evento inicialmente como rascunho (861.388ms)
  AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:

  404 !== 201

      at TestContext.<anonymous> (C:\Users\Habner\Documents\GitHub\ProjetoDSC\TotalEventos\dist\test\evento-entity-red.test.js:32:26)
      at process.processTicksAndRejections (node:internal/process/task_queues:104:5)
      at async Test.run (node:internal/test_runner/test:1409:7)
      at async startSubtestAfterBootstrap (node:internal/test_runner/harness:387:3) {
    generatedMessage: true,
    actual: 404,
    expected: 201,
    operator: 'strictEqual',
    diff: 'simple'
  }
```

## Interpretação
O build foi concluído e a aplicação recebeu a requisição. A falha é funcional: a rota de criação ainda não está disponível. O teste não alcança a asserção de estado `RASCUNHO`; esta evidência deve ser tratada como bloqueio de dependência, não como prova de que a regra da entidade falhou.

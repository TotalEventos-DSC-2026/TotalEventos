## Test push and Draft PR

Branch: feature/27-uc07-consultar-eventos-dispon-veis-red.

Exact push output:
```text
To https://github.com/TotalEventos-DSC-2026/TotalEventos.git
   dffbfb5..f5f4f94  feature/27-uc07-consultar-eventos-dispon-veis-red -> feature/27-uc07-consultar-eventos-dispon-veis-red
```

Existing PR #91: https://github.com/TotalEventos-DSC-2026/TotalEventos/pull/91 (OPEN/Draft; verified).

Exact PR body:

## Draft PR — [UC07] Consultar Eventos Disponíveis

### Issue
#27 — https://github.com/TotalEventos-DSC-2026/TotalEventos/issues/27

### Objective
Record the RED phase for public event listing without production changes.

### Proposed REST contract — pending team review
- GET /eventos/publicos returns 200 with a JSON list of visible events.
- GET /eventos/disponiveis returns 200; optional filters: data, sala, eventoId.
- GET /eventos/:id returns 200 for an existing event.
- POST /eventos with {titulo, descricao, dataInicio, dataFim, espacoFisicoId} returns 201.

### RED test
Test file: test/uc07-public-query-red.test.ts. Build succeeded; the focused test had exit code 1.

Exact test output:
```text
✖ UC07 public event listing returns HTTP 200 with a JSON array (397.8312ms)
ℹ tests 1
ℹ suites 0
ℹ pass 0
ℹ fail 1
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 1318.7311

✖ failing tests:

test at dist\test\uc07-public-query-red.test.js:28:22
✖ UC07 public event listing returns HTTP 200 with a JSON array (397.8312ms)
  AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:
  
  404 !== 200
  
      at TestContext.<anonymous> (C:\Users\Habner\.copilot\session-state\4ce3a150-0dca-48cd-979b-62a67cd5c53c\files\worktrees\uc07-uc08\dist\test\uc07-public-query-red.test.js:30:22)
      at process.processTicksAndRejections (node:internal/process/task_queues:104:5)
      at async Test.run (node:internal/test_runner/test:1409:7)
      at async startSubtestAfterBootstrap (node:internal/test_runner/harness:387:3) {
    generatedMessage: true,
    code: 'ERR_ASSERTION',
    actual: 404,
    expected: 200,
    operator: 'strictEqual',
    diff: 'simple'
  }
```

The 404 is an early dependency failure at the missing GET /eventos/publicos route; the list payload assertion was not reached.

### Status
In Progress. RED test commit: f5f4f9429fc442925ace5ac4d25adf8551317dd7. Review pending; this PR remains Draft. No GREEN, merge, or issue closure.
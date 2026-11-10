## Test commit push

Branch: feature/52-sub-uc07-02-visibilidade-e-disponibilidade-de-vagas-red.

````text
git.exe : To https://github.com/TotalEventos-DSC-2026/TotalEventos.git
No C:\Users\Habner\.copilot\session-state\4ce3a150-0dca-48cd-979b-62a67cd5c53c\files\worktrees\uc07-uc08\run-uc07-batch
.ps1:129 caractere:11
+   $push = & git -C $w push origin $branch 2>&1
+           ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : NotSpecified: (To https://gith...otalEventos.git:String) [], RemoteException
    + FullyQualifiedErrorId : NativeCommandError
 
   d5b99e0..4bb5e0f  feature/52-sub-uc07-02-visibilidade-e-disponibilidade-de-vagas-red -> 
feature/52-sub-uc07-02-visibilidade-e-disponibilidade-de-vagas-red
````

PR #66: https://github.com/TotalEventos-DSC-2026/TotalEventos/pull/66 (confirmed OPEN/Draft).
Corpo exato atualizado no Draft PR:

## Draft PR — Issue #52 (UC07 public queries)

### Issue
#52 — https://github.com/TotalEventos-DSC-2026/TotalEventos/issues/52

### RED scenario
Consulta pública sinaliza um evento disponível sem expor dados internos.

Test: `test/uc07-public-query-red.test.ts`; Nest AppModule with isolated temporary SQLite. `npm run build` succeeded. Test command: `node --test dist/test/uc07-public-query-red.test.js` (exit 1). Actual outcome:

```text
✖ UC07 availability listing marks an available event after event setup (792.5414ms)
ℹ tests 1
ℹ suites 0
ℹ pass 0
ℹ fail 1
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 2371.3289

✖ failing tests:

test at dist\test\uc07-public-query-red.test.js:28:22
✖ UC07 availability listing marks an available event after event setup (792.5414ms)
  AssertionError [ERR_ASSERTION]: setup prerequisite POST /eventos must succeed before checking availability
  
  404 !== 201
  
      at TestContext.<anonymous> (C:\Users\Habner\.copilot\session-state\4ce3a150-0dca-48cd-979b-62a67cd5c53c\files\worktrees\uc07-uc08\dist\test\uc07-public-query-red.test.js:30:22)
      at process.processTicksAndRejections (node:internal/process/task_queues:104:5)
      at async Test.run (node:internal/test_runner/test:1409:7)
      at async startSubtestAfterBootstrap (node:internal/test_runner/harness:387:3) {
    generatedMessage: false,
    code: 'ERR_ASSERTION',
    actual: 404,
    expected: 201,
    operator: 'strictEqual',
    diff: 'simple'
  }
```

### Upstream dependency
O teste começa pelo endpoint proposto POST /eventos; resultado diferente de 201 interrompe o teste antes da consulta de disponibilidade.

### Proposed REST contract — pending team review
POST /eventos {titulo, descricao, dataInicio, dataFim, espacoFisicoId} → 201 (setup); GET /eventos/disponiveis?eventoId=... → 200; item público inclui estadoDisponibilidade=DISPONIVEL|LOTADO|INDISPONIVEL.

### Status
In Progress. RED test commit: `4bb5e0f5a28968a7cd2576e74e31d42ddf4b328d`. Review pending; PR remains Draft. No production changes, GREEN, merge, or issue closure.

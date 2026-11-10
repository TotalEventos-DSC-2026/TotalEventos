## Test commit push

Branch: feature/54-sub-uc07-04-testes-de-consulta-p-blica-red.

````text
git.exe : To https://github.com/TotalEventos-DSC-2026/TotalEventos.git
No C:\Users\Habner\.copilot\session-state\4ce3a150-0dca-48cd-979b-62a67cd5c53c\files\worktrees\uc07-uc08\run-uc07-batch
.ps1:129 caractere:11
+   $push = & git -C $w push origin $branch 2>&1
+           ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : NotSpecified: (To https://gith...otalEventos.git:String) [], RemoteException
    + FullyQualifiedErrorId : NativeCommandError
 
   9a1461b..4d1784c  feature/54-sub-uc07-04-testes-de-consulta-p-blica-red -> 
feature/54-sub-uc07-04-testes-de-consulta-p-blica-red
````

PR #64: https://github.com/TotalEventos-DSC-2026/TotalEventos/pull/64 (confirmed OPEN/Draft).
Corpo exato atualizado no Draft PR:

## Draft PR — Issue #54 (UC07 public queries)

### Issue
#54 — https://github.com/TotalEventos-DSC-2026/TotalEventos/issues/54

### RED scenario
Consulta pública de integração retorna resposta válida para a listagem sem filtros.

Test: `test/uc07-public-query-red.test.ts`; Nest AppModule with isolated temporary SQLite. `npm run build` succeeded. Test command: `node --test dist/test/uc07-public-query-red.test.js` (exit 1). Actual outcome:

```text
✖ UC07 public query returns a successful JSON list for integration clients (836.4681ms)
ℹ tests 1
ℹ suites 0
ℹ pass 0
ℹ fail 1
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 2940.9827

✖ failing tests:

test at dist\test\uc07-public-query-red.test.js:28:22
✖ UC07 public query returns a successful JSON list for integration clients (836.4681ms)
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

### Upstream dependency
None; the proposed public listing is tested directly.

### Proposed REST contract — pending team review
GET /eventos/publicos → 200 and a JSON list (empty list is valid); GET /eventos/disponiveis additionally accepts data, sala, eventoId filters.

### Status
In Progress. RED test commit: `4d1784ccc6157a83e8d7604ca068d2da3f81fd94`. Review pending; PR remains Draft. No production changes, GREEN, merge, or issue closure.

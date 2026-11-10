## Test commit push

Branch: feature/51-sub-uc07-01-consultas-e-filtros-por-evento-data-sala-red.

````text
git.exe : To https://github.com/TotalEventos-DSC-2026/TotalEventos.git
No C:\Users\Habner\.copilot\session-state\4ce3a150-0dca-48cd-979b-62a67cd5c53c\files\worktrees\uc07-uc08\run-uc07-batch
.ps1:129 caractere:11
+   $push = & git -C $w push origin $branch 2>&1
+           ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : NotSpecified: (To https://gith...otalEventos.git:String) [], RemoteException
    + FullyQualifiedErrorId : NativeCommandError
 
   f0e2be1..bb55fca  feature/51-sub-uc07-01-consultas-e-filtros-por-evento-data-sala-red -> 
feature/51-sub-uc07-01-consultas-e-filtros-por-evento-data-sala-red
````

PR #67: https://github.com/TotalEventos-DSC-2026/TotalEventos/pull/67 (confirmed OPEN/Draft).
Corpo exato atualizado no Draft PR:

## Draft PR — Issue #51 (UC07 public queries)

### Issue
#51 — https://github.com/TotalEventos-DSC-2026/TotalEventos/issues/51

### RED scenario
Filtros por evento/data/sala retornam a consulta pública (HTTP 200 e lista).

Test: `test/uc07-public-query-red.test.ts`; Nest AppModule with isolated temporary SQLite. `npm run build` succeeded. Test command: `node --test dist/test/uc07-public-query-red.test.js` (exit 1). Actual outcome:

```text
✖ UC07 filtered public listing accepts event, date, and room filters (959.6447ms)
ℹ tests 1
ℹ suites 0
ℹ pass 0
ℹ fail 1
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 2733.0324

✖ failing tests:

test at dist\test\uc07-public-query-red.test.js:28:22
✖ UC07 filtered public listing accepts event, date, and room filters (959.6447ms)
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
None; the proposed query is tested directly.

### Proposed REST contract — pending team review
GET /eventos/disponiveis?eventoId=...&data=YYYY-MM-DD&sala=... returns 200 and a JSON list; filters are optional.

### Status
In Progress. RED test commit: `bb55fcaecde5529e5ab0f2b881084f4d01b591cc`. Review pending; PR remains Draft. No production changes, GREEN, merge, or issue closure.

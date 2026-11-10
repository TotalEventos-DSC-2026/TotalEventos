# 04-05 — RED test execution

Build: `npm run build` — **passed**.
Test: `node --test --test-reporter=spec dist/test/red-issue-23.test.js` — **failed as expected at a missing prerequisite route**. It expected 201 from `POST /eventos` and received 404. The publication and public-visibility assertions were not reached; do not interpret this as reaching the publication rule.

Exact test output:
```text
✖ evento válido publicado fica visível na consulta pública (803.2374ms)
ℹ tests 1
ℹ suites 0
ℹ pass 0
ℹ fail 1
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 2877.3756

✖ failing tests:

test at dist\test\red-issue-23.test.js:28:22
✖ evento válido publicado fica visível na consulta pública (803.2374ms)
  AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:
  
  404 !== 201
  
      at TestContext.<anonymous> (C:\Users\Habner\.copilot\session-state\4ce3a150-0dca-48cd-979b-62a67cd5c53c\files\worktrees\uc02-uc03\dist\test\red-issue-23.test.js:40:22)
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

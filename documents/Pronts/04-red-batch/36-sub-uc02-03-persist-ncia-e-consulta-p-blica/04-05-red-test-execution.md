# 04-05 — RED test execution

Build: 
pm run build — passed (exit 0).
Test: 
ode --test --test-reporter=spec dist/test/red-issue-36.test.js — failed at the HTTP status assertion, receiving 404. This is an early missing-route dependency failure; the deeper issue rule was not reached.

Exact test output:
``text
✖ consulta pública não inclui evento em rascunho (742.2486ms)
ℹ tests 1
ℹ suites 0
ℹ pass 0
ℹ fail 1
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 2465.5519

✖ failing tests:

test at dist\test\red-issue-36.test.js:28:22
✖ consulta pública não inclui evento em rascunho (742.2486ms)
  AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:
  
  404 !== 201
  
      at TestContext.<anonymous> (C:\Users\Habner\.copilot\session-state\4ce3a150-0dca-48cd-979b-62a67cd5c53c\files\worktrees\uc02-uc03\dist\test\red-issue-36.test.js:33:22)
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
``

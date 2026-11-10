## Build and RED run

npm run build: succeeded.

Command: node --test dist/test/uc07-public-query-red.test.js; exit code 1. Exact test-runner output:

````text
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
````

Interpretation: O teste começa pelo endpoint proposto POST /eventos; resultado diferente de 201 interrompe o teste antes da consulta de disponibilidade.
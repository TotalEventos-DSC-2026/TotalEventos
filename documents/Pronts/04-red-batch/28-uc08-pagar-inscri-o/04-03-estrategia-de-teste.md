## Test strategy

TypeScript node:test test in test/uc08-payment-red.test.ts, using Nest AppModule and temporary SQLite under the worktree (.red-test-28, removed by after hook). The focused test is an explicit skip until a safe gateway simulator is agreed; no real gateway call or client-selected outcome.
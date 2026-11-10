# 04-03 — Test scenario

	est/red-issue-42.test.ts starts Nest AppModule on an ephemeral localhost port with a temporary SQLite file. Scenario: Aceitar inscrição, consultar seu estado e rejeitar repetição duplicada.

Commands: 
pm run build; 
ode --test --test-reporter=spec dist/test/red-issue-42.test.js.

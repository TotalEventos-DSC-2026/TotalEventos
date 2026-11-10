# 04-03 — Test scenario

	est/red-issue-41.test.ts starts Nest AppModule on an ephemeral localhost port with a temporary SQLite file. Scenario: Enviar inscrição válida ao endpoint de UC03 e esperar status 201.

Commands: 
pm run build; 
ode --test --test-reporter=spec dist/test/red-issue-41.test.js.

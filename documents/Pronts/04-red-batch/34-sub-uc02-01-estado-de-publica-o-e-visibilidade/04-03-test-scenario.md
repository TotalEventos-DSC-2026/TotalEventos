# 04-03 — Test scenario

	est/red-issue-34.test.ts starts Nest AppModule on an ephemeral localhost port with a temporary SQLite file. Scenario: Solicitar a transição de um evento publicável e esperar 200.

Commands: 
pm run build; 
ode --test --test-reporter=spec dist/test/red-issue-34.test.js.

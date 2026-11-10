# 04-03 — Test scenario

	est/red-issue-37.test.ts starts Nest AppModule on an ephemeral localhost port with a temporary SQLite file. Scenario: Enviar PATCH de publicação para um evento válido e esperar 200.

Commands: 
pm run build; 
ode --test --test-reporter=spec dist/test/red-issue-37.test.js.

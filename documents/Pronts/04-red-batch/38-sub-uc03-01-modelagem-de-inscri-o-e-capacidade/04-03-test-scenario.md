# 04-03 — Test scenario

	est/red-issue-38.test.ts starts Nest AppModule on an ephemeral localhost port with a temporary SQLite file. Scenario: Submeter inscrição válida para uma sessão com capacidade disponível e esperar 201.

Commands: 
pm run build; 
ode --test --test-reporter=spec dist/test/red-issue-38.test.js.

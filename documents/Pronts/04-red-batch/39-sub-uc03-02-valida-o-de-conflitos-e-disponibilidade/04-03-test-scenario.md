# 04-03 — Test scenario

	est/red-issue-39.test.ts starts Nest AppModule on an ephemeral localhost port with a temporary SQLite file. Scenario: Criar inscrição válida e repetir a combinação participante/sessão; a duplicata deve retornar 409.

Commands: 
pm run build; 
ode --test --test-reporter=spec dist/test/red-issue-39.test.js.

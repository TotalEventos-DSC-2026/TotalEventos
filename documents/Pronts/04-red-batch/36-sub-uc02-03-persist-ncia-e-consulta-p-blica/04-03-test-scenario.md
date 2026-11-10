# 04-03 — Test scenario

	est/red-issue-36.test.ts starts Nest AppModule on an ephemeral localhost port with a temporary SQLite file. Scenario: Criar evento que inicia como rascunho e confirmar que a listagem pública o omite.

Commands: 
pm run build; 
ode --test --test-reporter=spec dist/test/red-issue-36.test.js.

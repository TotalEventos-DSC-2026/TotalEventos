# 04-03 — Test scenario

	est/red-issue-40.test.ts starts Nest AppModule on an ephemeral localhost port with a temporary SQLite file. Scenario: Criar inscrição, obter o identificador retornado e consultar a mesma inscrição por GET.

Commands: 
pm run build; 
ode --test --test-reporter=spec dist/test/red-issue-40.test.js.

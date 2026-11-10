# 04-03 — Test scenario

	est/red-issue-35.test.ts starts Nest AppModule on an ephemeral localhost port with a temporary SQLite file. Scenario: Tentar inscrever participante em evento com janela de inscrição fechada e esperar rejeição 409.

Commands: 
pm run build; 
ode --test --test-reporter=spec dist/test/red-issue-35.test.js.

# 04-03 — Test scenario

`test/red-issue-24.test.ts` starts Nest `AppModule` on an ephemeral localhost port with a temporary SQLite file, then posts `{participanteId,sessaoId}` to `/eventos/evt-red-24/inscricoes`.

Build: `npm run build`. Test: `node --test --test-reporter=spec dist/test/red-issue-24.test.js`.

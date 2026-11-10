# 04-03 — Test scenario

`test/red-issue-23.test.ts` starts the Nest `AppModule` on an ephemeral localhost port with a temporary SQLite file. The scenario posts an event using the planned fields, publishes its returned ID, then checks the public listing for the event title. The first status assertion is the first failing step; later requests are intentionally not claimed as reached.

Command: `npm run build` followed by `node --test --test-reporter=spec dist/test/red-issue-23.test.js`.

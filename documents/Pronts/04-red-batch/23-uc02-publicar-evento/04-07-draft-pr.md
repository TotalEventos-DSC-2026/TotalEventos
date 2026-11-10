# 04-07 — Draft PR evidence

- PR: https://github.com/TotalEventos-DSC-2026/TotalEventos/pull/95
- Verified state after update: OPEN, Draft.
- PR body:

> ## RED phase — Issue #23: UC02 Publish Event
>
> **Proposed scenario:** create a valid event, publish it, and verify it appears in the public listing.
> **Proposed API contract (pending team review):** `POST /eventos` with `{titulo, descricao, dataInicio, dataFim, espacoFisicoId}` returns 201 and `{id}`; `PATCH /eventos/:id/publicacao` returns 200; `GET /eventos/publicos` returns 200 and includes the event.
>
> **RED evidence:** `npm run build` passed. `node --test --test-reporter=spec dist/test/red-issue-23.test.js` fails at the first request: `POST /eventos` returned 404 instead of 201. This is an early missing-route dependency failure; publication and public-visibility assertions were not reached. No deeper rule is claimed as tested.
>
> Test commit: `ae996808e075c531309bf7f7860147ddc79d27ad`.
> Project status: In Progress. Review: pending; no review request sent. This PR remains Draft. No production code, merge, or issue closure is included; GREEN is out of scope.

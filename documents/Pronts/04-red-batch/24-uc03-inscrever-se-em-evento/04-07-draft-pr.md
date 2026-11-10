# 04-07 — Draft PR evidence

- PR: https://github.com/TotalEventos-DSC-2026/TotalEventos/pull/94
- Verified OPEN, Draft.
- PR body (verified from GitHub):

## RED phase — Issue #24: UC03 Enroll in Event

**Proposed scenario:** submit a valid participant/session enrollment while a place is available.
**Proposed API contract (pending team review):** `POST /eventos/:id/inscricoes` with `{participanteId,sessaoId}` returns 201 for a valid enrollment.

**RED evidence:** `npm run build` passed. `node --test --test-reporter=spec dist/test/red-issue-24.test.js` fails at the enrollment request: `POST /eventos/evt-red-24/inscricoes` returned 404 instead of 201. This is an early missing-route dependency failure; the capacity/enrollment rule was not reached.

Test commit: `e7a0b1f6bd71fd939ef7c45d79662b2078837908`.
Project status: In Progress. Review: pending; no review request sent. This PR remains Draft. No production code, merge, or issue closure is included; GREEN is out of scope.

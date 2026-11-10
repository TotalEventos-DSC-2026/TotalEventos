# 04-07 — Draft PR evidence

- PR: https://github.com/TotalEventos-DSC-2026/TotalEventos/pull/84
- Verified state after body update: OPEN, Draft=True.
- PR body, verified from GitHub:

<!-- PR BODY BEGIN -->
## RED phase — Issue #34

**Selected scenario:** Solicitar a transição de um evento publicável e esperar 200.
**Proposed API contract (pending team review):** PATCH /eventos/:id/publicacao; expected 200 for a valid transition. Event fixture evt-red-34 is a proposal pending team review.

**RED evidence:** 
pm run build passed. 
ode --test --test-reporter=spec dist/test/red-issue-34.test.js fails on the first unavailable HTTP route: actual status 404 differs from the proposed expected status. This is an early missing-route dependency failure; the deeper issue rule was not reached. See the branch's Material 04 evidence for exact output.

Test commit: `d8dc90d5a863d3f11d0f4eaca35a9789c0647f85`.
Project status: In Progress. Review: pending; no review request sent. This PR remains Draft. No production implementation, merge, or issue closure is included; GREEN is out of scope.
<!-- PR BODY END -->

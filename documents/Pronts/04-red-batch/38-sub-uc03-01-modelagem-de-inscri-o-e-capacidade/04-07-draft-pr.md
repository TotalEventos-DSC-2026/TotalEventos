# 04-07 — Draft PR evidence

- PR: https://github.com/TotalEventos-DSC-2026/TotalEventos/pull/80
- Verified state after body update: OPEN, Draft=True.
- PR body, verified from GitHub:

<!-- PR BODY BEGIN -->
## RED phase — Issue #38

**Selected scenario:** Submeter inscrição válida para uma sessão com capacidade disponível e esperar 201.
**Proposed API contract (pending team review):** POST /eventos/:id/inscricoes with {participanteId,sessaoId}; expected 201 when capacity is available. Event/session fixture IDs are proposals pending team review.

**RED evidence:** 
pm run build passed. 
ode --test --test-reporter=spec dist/test/red-issue-38.test.js fails on the first unavailable HTTP route: actual status 404 differs from the proposed expected status. This is an early missing-route dependency failure; the deeper issue rule was not reached. See the branch's Material 04 evidence for exact output.

Test commit: `3279b968e095d1e98da1b05a36b29fcf27dbc704`.
Project status: In Progress. Review: pending; no review request sent. This PR remains Draft. No production implementation, merge, or issue closure is included; GREEN is out of scope.
<!-- PR BODY END -->

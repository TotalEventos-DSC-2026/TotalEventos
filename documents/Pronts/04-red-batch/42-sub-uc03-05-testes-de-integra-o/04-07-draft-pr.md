# 04-07 — Draft PR evidence

- PR: https://github.com/TotalEventos-DSC-2026/TotalEventos/pull/76
- Verified state after body update: OPEN, Draft=True.
- PR body, verified from GitHub:

<!-- PR BODY BEGIN -->
## RED phase — Issue #42

**Selected scenario:** Aceitar inscrição, consultar seu estado e rejeitar repetição duplicada.
**Proposed API contract (pending team review):** POST /eventos/:id/inscricoes with {participanteId,sessaoId}: 201 first valid, 409 duplicate; GET /inscricoes/:id: 200. Response {id} and fixture behavior are proposals pending team review.

**RED evidence:** 
pm run build passed. 
ode --test --test-reporter=spec dist/test/red-issue-42.test.js fails on the first unavailable HTTP route: actual status 404 differs from the proposed expected status. This is an early missing-route dependency failure; the deeper issue rule was not reached. See the branch's Material 04 evidence for exact output.

Test commit: `5d635f9b7912830deff49bf6c4297ebf483d1fc2`.
Project status: In Progress. Review: pending; no review request sent. This PR remains Draft. No production implementation, merge, or issue closure is included; GREEN is out of scope.
<!-- PR BODY END -->

# 04-07 — Draft PR evidence

- PR: https://github.com/TotalEventos-DSC-2026/TotalEventos/pull/79
- Verified state after body update: OPEN, Draft=True.
- PR body, verified from GitHub:

<!-- PR BODY BEGIN -->
## RED phase — Issue #39

**Selected scenario:** Criar inscrição válida e repetir a combinação participante/sessão; a duplicata deve retornar 409.
**Proposed API contract (pending team review):** POST /eventos/:id/inscricoes with {participanteId,sessaoId}; first valid request 201, duplicate 409. Fixture/event availability is proposed pending team review.

**RED evidence:** 
pm run build passed. 
ode --test --test-reporter=spec dist/test/red-issue-39.test.js fails on the first unavailable HTTP route: actual status 404 differs from the proposed expected status. This is an early missing-route dependency failure; the deeper issue rule was not reached. See the branch's Material 04 evidence for exact output.

Test commit: `bd84a343bb02fa0db9a45802b36018fee67394cf`.
Project status: In Progress. Review: pending; no review request sent. This PR remains Draft. No production implementation, merge, or issue closure is included; GREEN is out of scope.
<!-- PR BODY END -->

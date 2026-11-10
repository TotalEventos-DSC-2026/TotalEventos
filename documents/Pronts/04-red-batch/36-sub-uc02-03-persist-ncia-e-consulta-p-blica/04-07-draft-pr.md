# 04-07 — Draft PR evidence

- PR: https://github.com/TotalEventos-DSC-2026/TotalEventos/pull/82
- Verified state after body update: OPEN, Draft=True.
- PR body, verified from GitHub:

<!-- PR BODY BEGIN -->
## RED phase — Issue #36

**Selected scenario:** Criar evento que inicia como rascunho e confirmar que a listagem pública o omite.
**Proposed API contract (pending team review):** POST /eventos with {titulo,descricao,dataInicio,dataFim,espacoFisicoId} returns 201 and defaults to draft; GET /eventos/publicos returns 200 without that draft. Default-draft behavior is a proposal pending team review.

**RED evidence:** 
pm run build passed. 
ode --test --test-reporter=spec dist/test/red-issue-36.test.js fails on the first unavailable HTTP route: actual status 404 differs from the proposed expected status. This is an early missing-route dependency failure; the deeper issue rule was not reached. See the branch's Material 04 evidence for exact output.

Test commit: `9d4a913b08316959948ed452dd9feb177518de4b`.
Project status: In Progress. Review: pending; no review request sent. This PR remains Draft. No production implementation, merge, or issue closure is included; GREEN is out of scope.
<!-- PR BODY END -->

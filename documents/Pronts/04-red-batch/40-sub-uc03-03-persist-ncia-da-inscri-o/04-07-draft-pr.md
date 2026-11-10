# 04-07 — Draft PR evidence

- PR: https://github.com/TotalEventos-DSC-2026/TotalEventos/pull/78
- Verified state after body update: OPEN, Draft=True.
- PR body, verified from GitHub:

<!-- PR BODY BEGIN -->
## RED phase — Issue #40

**Selected scenario:** Criar inscrição, obter o identificador retornado e consultar a mesma inscrição por GET.
**Proposed API contract (pending team review):** POST /eventos/:id/inscricoes with {participanteId,sessaoId} returns 201 and {id}; GET /inscricoes/:id returns 200. Response {id} is a proposal pending team review.

**RED evidence:** 
pm run build passed. 
ode --test --test-reporter=spec dist/test/red-issue-40.test.js fails on the first unavailable HTTP route: actual status 404 differs from the proposed expected status. This is an early missing-route dependency failure; the deeper issue rule was not reached. See the branch's Material 04 evidence for exact output.

Test commit: `1b85516edfe107f7d4577c714f8a7e7ba496c90a`.
Project status: In Progress. Review: pending; no review request sent. This PR remains Draft. No production implementation, merge, or issue closure is included; GREEN is out of scope.
<!-- PR BODY END -->

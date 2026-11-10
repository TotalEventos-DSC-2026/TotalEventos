# 04-07 — Draft PR evidence

- PR: https://github.com/TotalEventos-DSC-2026/TotalEventos/pull/83
- Verified state after body update: OPEN, Draft=True.
- PR body, verified from GitHub:

<!-- PR BODY BEGIN -->
## RED phase — Issue #35

**Selected scenario:** Tentar inscrever participante em evento com janela de inscrição fechada e esperar rejeição 409.
**Proposed API contract (pending team review):** POST /eventos/:id/inscricoes with {participanteId,sessaoId}; expected 409 for a closed enrollment window. Applying 409 to a closed window is an additional proposal pending team review; the event/window fixture is also a proposal.

**RED evidence:** 
pm run build passed. 
ode --test --test-reporter=spec dist/test/red-issue-35.test.js fails on the first unavailable HTTP route: actual status 404 differs from the proposed expected status. This is an early missing-route dependency failure; the deeper issue rule was not reached. See the branch's Material 04 evidence for exact output.

Test commit: `cb882f761c569cde451455b5da3c79b141a01a28`.
Project status: In Progress. Review: pending; no review request sent. This PR remains Draft. No production implementation, merge, or issue closure is included; GREEN is out of scope.
<!-- PR BODY END -->

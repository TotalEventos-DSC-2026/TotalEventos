# 04-04 — Test and proposed API specification

**Proposed contract — pending team review; not an established API.**

POST /eventos/:id/inscricoes with {participanteId,sessaoId}; expected 409 for a closed enrollment window. Applying 409 to a closed window is an additional proposal pending team review; the event/window fixture is also a proposal.

Fixture IDs and any response shape/default-state behavior are proposals. Actual test execution currently returns 404 at the initial status assertion; deeper domain/persistence rules were not reached.

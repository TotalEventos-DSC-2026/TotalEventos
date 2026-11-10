# 04-04 — Test and proposed API specification

**Proposed contract — pending team review; not an established API.**

POST /eventos/:id/inscricoes with {participanteId,sessaoId}; expected 201 for a valid enrollment.

Fixture IDs and any response shape/default-state behavior are proposals. Actual test execution currently returns 404 at the initial status assertion; deeper domain/persistence rules were not reached.

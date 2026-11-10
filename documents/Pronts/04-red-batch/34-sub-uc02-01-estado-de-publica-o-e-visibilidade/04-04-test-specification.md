# 04-04 — Test and proposed API specification

**Proposed contract — pending team review; not an established API.**

PATCH /eventos/:id/publicacao; expected 200 for a valid transition. Event fixture evt-red-34 is a proposal pending team review.

Fixture IDs and any response shape/default-state behavior are proposals. Actual test execution currently returns 404 at the initial status assertion; deeper domain/persistence rules were not reached.

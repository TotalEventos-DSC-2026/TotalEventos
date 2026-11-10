# 04-04 — Test and proposed API specification

**Proposed contract — pending team review; not an established API.**

POST /eventos with {titulo,descricao,dataInicio,dataFim,espacoFisicoId} returns 201 and defaults to draft; GET /eventos/publicos returns 200 without that draft. Default-draft behavior is a proposal pending team review.

Fixture IDs and any response shape/default-state behavior are proposals. Actual test execution currently returns 404 at the initial status assertion; deeper domain/persistence rules were not reached.

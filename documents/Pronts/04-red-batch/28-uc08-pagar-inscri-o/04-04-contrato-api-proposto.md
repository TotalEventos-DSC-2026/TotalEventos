## Proposed REST/payment contract — pending team review

- POST /inscricoes/:id/pagamentos, with no client-controlled outcome; empty body or no body remains a team decision.
- Proposed gateway port returns PENDENTE, APROVADO, RECUSADO, or FALHA.
- Approved -> HTTP 201; declined -> HTTP 402.
- No gateway abstraction or approved deterministic test double exists in this branch. The test stays blocked rather than inventing the simulated result.
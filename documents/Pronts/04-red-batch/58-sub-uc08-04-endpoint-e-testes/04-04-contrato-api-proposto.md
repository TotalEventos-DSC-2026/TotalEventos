## REST/payment contract — team review pending

POST /inscricoes/:id/pagamentos, no client-controlled outcome; gateway approved → 201, declined → 402. Inscription setup uses proposed POST /eventos then POST /eventos/:id/inscricoes with {participanteId, sessaoId}; payment fixture contract is pending.

Gateway abstraction/status semantics are proposals only. No user-controlled outcome field is sent. No production code changed.

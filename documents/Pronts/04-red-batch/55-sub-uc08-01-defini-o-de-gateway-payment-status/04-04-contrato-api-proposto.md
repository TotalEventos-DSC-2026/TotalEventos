## REST/payment contract — team review pending

POST /inscricoes/:id/pagamentos; no client-controlled outcome (empty body or no body, pending team decision); gateway port returns PENDENTE/APROVADO/RECUSADO/FALHA; approved → 201, declined → 402.

Gateway abstraction/status semantics are proposals only. No user-controlled outcome field is sent. No production code changed.

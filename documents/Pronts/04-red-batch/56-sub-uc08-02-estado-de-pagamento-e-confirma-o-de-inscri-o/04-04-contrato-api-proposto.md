## REST/payment contract — team review pending

POST /inscricoes/:id/pagamentos with no client-supplied result; gateway approval → 201 and inscription status CONFIRMADA only after approval. Response/payment fields remain pending review.

Gateway abstraction/status semantics are proposals only. No user-controlled outcome field is sent. No production code changed.

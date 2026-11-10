## REST/payment contract — team review pending

POST /inscricoes/:id/pagamentos with no client-controlled result; declined → 402, no confirmation; processing failure and compensation/status/audit semantics require team review.

Gateway abstraction/status semantics are proposals only. No user-controlled outcome field is sent. No production code changed.

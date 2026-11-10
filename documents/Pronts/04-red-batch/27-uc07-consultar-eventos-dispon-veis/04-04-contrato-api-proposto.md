## Proposed REST contract — pending team review

- GET /eventos/publicos -> 200 with a JSON list of visible events.
- GET /eventos/disponiveis -> 200; optional filters: data, sala, eventoId.
- GET /eventos/:id -> 200 for an existing event.
- POST /eventos with {titulo, descricao, dataInicio, dataFim, espacoFisicoId} -> 201.

Only GET /eventos/publicos is tested in this scenario. The actual 404 means response serialization was not reached. No production code changed.
# 04-04 — Test and proposed API specification

**Proposed contract — pending team review; not an established API.**

| Operation | Proposed request | Expected result |
|---|---|---|
| Create event | `POST /eventos`, JSON `{ "titulo": "Evento RED UC02", "descricao": "Cenário RED de publicação pública", "dataInicio": "2030-01-10T09:00:00.000Z", "dataFim": "2030-01-10T18:00:00.000Z", "espacoFisicoId": "espaco-red-23" }` | 201 and a response containing `id` |
| Publish event | `PATCH /eventos/:id/publicacao` | 200 |
| Public listing | `GET /eventos/publicos` | 200; response contains the published event |

The `id` response shape and listing representation are also proposals for this scenario. The test currently fails at the first operation (actual 404, expected 201); it does not reach either publication or listing.

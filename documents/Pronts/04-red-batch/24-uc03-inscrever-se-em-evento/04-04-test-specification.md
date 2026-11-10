# 04-04 — Test and proposed API specification

**Proposed contract — pending team review; not an established API.**

- `POST /eventos/:id/inscricoes`
- JSON: `{ "participanteId": "participante-red-24", "sessaoId": "sessao-red-24" }`
- Expected: 201 for a valid participant enrollment when capacity is available.
- The event/session fixture IDs are proposals. Test execution currently receives 404 at this request; the enrollment rule was not reached.

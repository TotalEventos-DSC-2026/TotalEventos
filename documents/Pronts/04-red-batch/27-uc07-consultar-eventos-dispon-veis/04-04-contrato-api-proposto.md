## Contrato REST proposto — pendente de revisão da equipe

- GET /eventos/publicos → 200, lista JSON de eventos visíveis.
- GET /eventos/disponiveis → 200, filtros opcionais data, sala, eventoId.
- GET /eventos/:id → 200 para evento existente.
- POST /eventos com {titulo, descricao, dataInicio, dataFim, espacoFisicoId} → 201.

Nenhuma produção foi alterada. O cenário atual valida somente a primeira rota; a execução terminou em 404 antes de validar o corpo.

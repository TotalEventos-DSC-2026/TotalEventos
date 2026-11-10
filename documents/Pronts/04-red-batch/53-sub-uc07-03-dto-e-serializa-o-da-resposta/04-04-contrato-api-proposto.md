## REST proposto — pendente de revisão da equipe

POST /eventos {titulo, descricao, dataInicio, dataFim, espacoFisicoId} → 201 (setup); GET /eventos/publicos?eventoId=... → 200 with public DTO fields eventoId, titulo, data, sala, vagasDisponiveis, visibilidade.

Nenhuma produção alterada. O teste não inventa resposta: observa o status real e declara se falhou no endpoint/pré-condição.

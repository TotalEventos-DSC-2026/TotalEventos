## REST proposto — pendente de revisão da equipe

POST /eventos {titulo, descricao, dataInicio, dataFim, espacoFisicoId} → 201 (setup); GET /eventos/disponiveis?eventoId=... → 200; item público inclui estadoDisponibilidade=DISPONIVEL|LOTADO|INDISPONIVEL.

Nenhuma produção alterada. O teste não inventa resposta: observa o status real e declara se falhou no endpoint/pré-condição.

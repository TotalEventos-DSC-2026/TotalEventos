# 04-01 — Verificacao de Prontidao

| DoR | Avaliacao | Evidencia |
|---|---|---|
| Objetivo | Atende | Expor a operacao HTTP de cancelamento e persistir estado CANCELADA para inscricao confirmada. |
| Escopo | Parcial | O teste cobre apenas o primeiro comportamento observavel. |
| Dependencias | Pendente | SUB-UC04-02 e SUB-UC04-03 |
| Contrato | Proposta | Proposta: POST /inscricoes/{id}/cancelar com HTTP 200/204; validar com a equipe. |
| Revisao | Pendente | Revisao por par pendente. |

A rota proposta retorna 404; a assercao sobre inscricao persistida nao foi alcancada.
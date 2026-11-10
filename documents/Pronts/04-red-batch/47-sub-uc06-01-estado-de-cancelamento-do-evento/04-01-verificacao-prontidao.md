# 04-01 — Verificacao de Prontidao

| DoR | Avaliacao | Evidencia |
|---|---|---|
| Objetivo | Atende | Representar explicitamente o evento cancelado e aplicar uma transicao valida. |
| Escopo | Parcial | O teste cobre apenas o primeiro comportamento observavel. |
| Dependencias | Pendente | SUB-UC01-01 e SUB-UC02-01 |
| Contrato | Proposta | Proposta: POST /eventos/{id}/cancelar; status HTTP 200/204 assumido, validar com a equipe. |
| Revisao | Pendente | Revisao por par pendente. |

Nao ha modulo/agregado de eventos no AppModule; rota ausente retorna 404.
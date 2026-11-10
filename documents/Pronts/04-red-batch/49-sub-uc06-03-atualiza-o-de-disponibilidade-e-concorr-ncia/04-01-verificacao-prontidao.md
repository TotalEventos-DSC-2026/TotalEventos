# 04-01 — Verificacao de Prontidao

| DoR | Avaliacao | Evidencia |
|---|---|---|
| Objetivo | Atende | Liberar ocupacao ao cancelar evento e manter limites em liberacoes concorrentes. |
| Escopo | Parcial | O teste cobre apenas o primeiro comportamento observavel. |
| Dependencias | Pendente | SUB-UC06-01 e SUB-UC06-02 |
| Contrato | Proposta | Seam interno assumido: SessaoPalestra.liberarVaga; validar o desenho com a equipe. |
| Revisao | Pendente | Revisao por par pendente. |

SessaoPalestra nao expoe liberacao de vaga; a concorrencia/ocupacao nao foi exercitada.
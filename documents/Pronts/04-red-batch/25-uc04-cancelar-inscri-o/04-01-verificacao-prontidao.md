# 04-01 — Verificacao de Prontidao

| DoR | Avaliacao | Evidencia |
|---|---|---|
| Objetivo claro | Atende | Cancelar inscricao confirmada e devolver a vaga. |
| Escopo delimitado | Atende | Um teste de integracao para estado persistido e ocupacao. |
| Criterio verificavel | Atende parcialmente | Inscricao CANCELADA e ocupacao reduzida a zero. |
| Dependencias | Pendente | UC03 e fluxo de inscricao ainda nao foram verificados neste teste. |
| Contrato HTTP | Proposta | `POST /inscricoes/{id}/cancelar`, sucesso 200/204; validar com a equipe. |
| Revisao formal | Pendente | Revisao por par pendente. |

O teste recebeu 404 na rota proposta; as regras de cancelamento nao foram alcancadas.
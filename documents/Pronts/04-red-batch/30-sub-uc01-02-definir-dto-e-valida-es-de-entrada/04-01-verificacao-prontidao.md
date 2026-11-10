# 04-01 — Verificação de Prontidão

| DoR | Avaliação | Evidência |
|---|---|---|
| Objetivo claro | Atende | Definir contrato de entrada e rejeitar dados incompletos. |
| Escopo delimitado | Atende | O cenário verifica apenas payload vazio. |
| Critério verificável | Atende | A issue exige rejeição explícita de dados inválidos. |
| Dependências identificadas | Pendente de implementação | A issue depende de #29; `POST /eventos` ainda não existe. |
| Informações técnicas | Parcial | Projeto TypeScript/NestJS; DTO e rota não estão implementados. |
| Responsável definido | Atende | `sonwss`. |
| Revisão formal | Pendente | Review de colega não confirmado no Draft PR. |

Autorizado o teste HTTP de contrato proposto. A evidência atual é o endpoint ausente; a validação do DTO só poderá ser verificada após a rota existir.

# 04-01 — Verificação de Prontidão

| DoR | Avaliação | Evidência |
|---|---|---|
| Objetivo claro | Atende | Expor endpoint HTTP de criação de evento. |
| Escopo delimitado | Atende | Teste de integração de criação válida. |
| Critério verificável | Atende | Status apropriado e evento retornado com ID/título. |
| Dependências identificadas | Pendente | A issue cita DTO, regras de data e persistência (SUB-UC01-02/03/04). |
| Contrato técnico | Proposto | `POST /eventos`, 201 e JSON com `id` e `titulo`; equipe deve validar. |
| Responsável definido | Atende | `ManuMadeira`. |
| Revisão formal | Pendente | Review de colega não confirmado. |

O teste falha atualmente no endpoint ausente, antes de validar o corpo.

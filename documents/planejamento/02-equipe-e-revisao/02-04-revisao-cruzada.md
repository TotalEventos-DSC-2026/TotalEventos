# 02-04 — Relatório de Revisão Cruzada das Issues

## Objetivo
Avaliar cada atividade sob três critérios: clareza, coerência com o caso de uso e possibilidade de execução sem ambiguidades.

## Resultado da revisão
| ID | Elemento avaliado | Resultado | Apontamento | Recomendação |
| --- | --- | --- | --- | --- |
| `SUB-UC01-01` | objetivo e escopo | Conforme | base adequada para o domínio do evento | manter |
| `SUB-UC01-02` | DTO e validação | Ajuste Necessário | incluir exemplos de entrada inválida e mensagens de erro | complementar a descrição |
| `SUB-UC01-03` | regras temporais | Conforme | escopo relevante e testável | manter |
| `SUB-UC01-04` | persistência | Ajuste Necessário | detalhar repositório e contrato de persistência | incluir estrutura do repositório |
| `SUB-UC01-05` | endpoint e testes | Ajuste Necessário | definir status HTTP esperado e cenários de falha | complementar |
| `SUB-UC02-01` | visibilidade e publicação | Conforme | objetivo coerente com a regra de negócio | manter |
| `SUB-UC02-02` | período de inscrição | Conforme | regra clara e verificável | manter |
| `SUB-UC02-03` | consulta pública | Ajuste Necessário | definir se a consulta é pública ou autenticada | esclarecer o nível de acesso |
| `SUB-UC02-04` | endpoint de publicação | Ajuste Necessário | informar retorno e cenário de falha | incluir resposta de sucesso/erro |
| `SUB-UC03-01` | inscrição e capacidade | Conforme | base sólida para regras de lotação | manter |
| `SUB-UC03-02` | conflitos e disponibilidade | Conforme | regras de negócio bem definidas | manter |
| `SUB-UC03-03` | persistência da inscrição | Ajuste Necessário | definir status e consultas relevantes | incluir estrutura de dados |
| `SUB-UC03-04` | endpoint de inscrição | Ajuste Necessário | definir retorno e cenários de concorrência | complementar |
| `SUB-UC03-05` | testes de integração | Conforme | cenário de lotação e conflito são pertinentes | manter |
| `SUB-UC04-01` | estado de cancelamento | Conforme | escopo consistente com a regra de negócio | manter |
| `SUB-UC04-02` | liberação de vaga | Ajuste Necessário | detalhar o comportamento em concorrência | acrescentar cenário simultâneo |
| `SUB-UC04-03` | persistência e auditoria | Ajuste Necessário | incluir rastreio e motivo do cancelamento | detalhar dados de auditoria |
| `SUB-UC04-04` | endpoint de cancelamento | Ajuste Necessário | descrever resposta e falhas | incluir payload e retorno |
| `SUB-UC06-01` | cancelamento do evento | Conforme | descreve bem a transição de estado | manter |
| `SUB-UC06-02` | tratamento de participantes | Ajuste Necessário | definir canal de comunicação e atualização do estado | incluir a política de notificação |
| `SUB-UC06-03` | disponibilidade e concorrência | Ajuste Necessário | detalhar reversão de vagas em cenário simultâneo | complementar regras de concorrência |
| `SUB-UC06-04` | endpoint e testes | Ajuste Necessário | definir sucesso/erro e retorno do cliente | complementar |
| `SUB-UC07-01` | filtros e consultas | Conforme | bem alinhada com a consulta pública | manter |
| `SUB-UC07-02` | visibilidade e vagas | Conforme | regra clara de disponibilidade | manter |
| `SUB-UC07-03` | DTO da resposta | Ajuste Necessário | definir payload público e campos relevantes | especificar a estrutura |
| `SUB-UC07-04` | testes de consulta | Conforme | cobertura adequada | manter |
| `SUB-UC08-01` | gateway e status | Ajuste Necessário | falta o contrato de integração externa | detalhar status e retorno do gateway |
| `SUB-UC08-02` | pagamento e confirmação | Conforme | regra clara de efetivação da inscrição | manter |
| `SUB-UC08-03` | compensação e falha | Ajuste Necessário | definir rollback e cenário de retry | complementar |
| `SUB-UC08-04` | endpoint e testes | Ajuste Necessário | informar retorno do pagamento e casos de falha | complementar |

## Conclusão
As Sub-Issues estão, em geral, coerentes com o caso de uso e com as dependências técnicas. As pendências de revisão concentram-se em payload, retorno de API, concorrência e checagem humana antes da promoção para `Ready`.

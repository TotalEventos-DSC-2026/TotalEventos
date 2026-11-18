# 02-03 — Matriz de Distribuição das Sub-Issues

## Escopo
A distribuição considera as Sub-Issues planejadas para os casos de uso do projeto TotalEventos, preservando os identificadores e os títulos já definidos na etapa de planejamento.

| ID | Título da atividade | Complexidade | Dependências | Assignee | Reviewer | Status atual | Status recomendado |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `SUB-UC01-01` | Modelar entidade Evento | Média | Nenhuma crítica | `ManuMadeira` | `sonwss` | `Ready` | `Ready` |
| `SUB-UC01-02` | Definir DTO e validações de entrada | Média | `SUB-UC01-01` | `sonwss` | `ManuMadeira` | `Ready` | `Ready` |
| `SUB-UC01-03` | Implementar regras de datas e estado do evento | Média | `SUB-UC01-01`, `SUB-UC01-02` | `ManuMadeira` | `sonwss` | `Ready` | `Ready` |
| `SUB-UC01-04` | Implementar persistência do evento | Alta | `SUB-UC01-01`, `SUB-UC01-02`, `SUB-UC01-03` | `sonwss` | `ManuMadeira` | `Backlog` | `Backlog` |
| `SUB-UC01-05` | Expor endpoint de criação e testes | Alta | `SUB-UC01-02`, `SUB-UC01-03`, `SUB-UC01-04` | `ManuMadeira` | `sonwss` | `Backlog` | `Backlog` |
| `SUB-UC02-01` | Estado de publicação e visibilidade | Média | `SUB-UC01-01`, `SUB-UC01-02`, `SUB-UC01-03` | `sonwss` | `ManuMadeira` | `Backlog` | `Backlog` |
| `SUB-UC02-02` | Regras de período de inscrição | Média | `SUB-UC02-01` | `ManuMadeira` | `sonwss` | `Ready` | `Ready` |
| `SUB-UC02-03` | Persistência e consulta pública | Alta | `SUB-UC02-01`, `SUB-UC02-02` | `sonwss` | `ManuMadeira` | `Backlog` | `Backlog` |
| `SUB-UC02-04` | Endpoint de publicação | Alta | `SUB-UC02-01`, `SUB-UC02-02`, `SUB-UC02-03` | `ManuMadeira` | `sonwss` | `Backlog` | `Backlog` |
| `SUB-UC03-01` | Modelagem de inscrição e capacidade | Média | `SUB-UC01-01`, `SUB-UC02-01` | `sonwss` | `ManuMadeira` | `Ready` | `Ready` |
| `SUB-UC03-02` | Validação de conflitos e disponibilidade | Alta | `SUB-UC03-01` | `ManuMadeira` | `sonwss` | `Ready` | `Ready` |
| `SUB-UC03-03` | Persistência da inscrição | Alta | `SUB-UC03-01`, `SUB-UC03-02` | `sonwss` | `ManuMadeira` | `Backlog` | `Backlog` |
| `SUB-UC03-04` | Endpoint de inscrição | Alta | `SUB-UC03-02`, `SUB-UC03-03` | `ManuMadeira` | `sonwss` | `Backlog` | `Backlog` |
| `SUB-UC03-05` | Testes de integração | Média | `SUB-UC03-04` | `sonwss` | `ManuMadeira` | `Backlog` | `Backlog` |
| `SUB-UC04-01` | Estado de cancelamento | Média | `SUB-UC03-01`, `SUB-UC03-03` | `ManuMadeira` | `sonwss` | `Backlog` | `Backlog` |
| `SUB-UC04-02` | Liberação de vaga | Média | `SUB-UC04-01` | `sonwss` | `ManuMadeira` | `Backlog` | `Backlog` |
| `SUB-UC04-03` | Persistência e auditoria | Média | `SUB-UC04-01`, `SUB-UC04-02` | `ManuMadeira` | `sonwss` | `Backlog` | `Backlog` |
| `SUB-UC04-04` | Endpoint de cancelamento | Alta | `SUB-UC04-02`, `SUB-UC04-03` | `sonwss` | `ManuMadeira` | `Backlog` | `Backlog` |
| `SUB-UC06-01` | Estado de cancelamento do evento | Média | `SUB-UC01-01`, `SUB-UC02-01` | `ManuMadeira` | `sonwss` | `Backlog` | `Backlog` |
| `SUB-UC06-02` | Notificação e tratamento de participantes | Média | `SUB-UC06-01` | `sonwss` | `ManuMadeira` | `Backlog` | `Backlog` |
| `SUB-UC06-03` | Atualização de disponibilidade e concorrência | Alta | `SUB-UC06-01`, `SUB-UC06-02` | `ManuMadeira` | `sonwss` | `Backlog` | `Backlog` |
| `SUB-UC06-04` | Endpoint e testes | Alta | `SUB-UC06-01`, `SUB-UC06-02`, `SUB-UC06-03` | `sonwss` | `ManuMadeira` | `Backlog` | `Backlog` |
| `SUB-UC07-01` | Consultas e filtros por evento/data/sala | Média | `SUB-UC02-01`, `SUB-UC02-03` | `ManuMadeira` | `sonwss` | `Backlog` | `Backlog` |
| `SUB-UC07-02` | Visibilidade e disponibilidade de vagas | Média | `SUB-UC07-01` | `sonwss` | `ManuMadeira` | `Backlog` | `Backlog` |
| `SUB-UC07-03` | DTO e serialização da resposta | Média | `SUB-UC07-01`, `SUB-UC07-02` | `ManuMadeira` | `sonwss` | `Backlog` | `Backlog` |
| `SUB-UC07-04` | Testes de consulta pública | Média | `SUB-UC07-03` | `sonwss` | `ManuMadeira` | `Backlog` | `Backlog` |
| `SUB-UC08-01` | Definição de gateway/payment status | Média | `SUB-UC03-01`, `SUB-UC03-02` | `ManuMadeira` | `sonwss` | `Backlog` | `Backlog` |
| `SUB-UC08-02` | Estado de pagamento e confirmação de inscrição | Média | `SUB-UC08-01` | `sonwss` | `ManuMadeira` | `Backlog` | `Backlog` |
| `SUB-UC08-03` | Regras de compensação e falha | Alta | `SUB-UC08-02` | `ManuMadeira` | `sonwss` | `Backlog` | `Backlog` |
| `SUB-UC08-04` | Endpoint e testes | Alta | `SUB-UC08-01`, `SUB-UC08-02`, `SUB-UC08-03` | `sonwss` | `ManuMadeira` | `Backlog` | `Backlog` |

## Critérios de distribuição
- O revisor deve ser diferente do assignee.
- A complexidade e dependência devem orientar a alocação.
- Itens críticos de base devem receber revisão prioritária.
- A distribuição acima foi definida entre `ManuMadeira` e `sonwss`, respeitando a equipe real do projeto.

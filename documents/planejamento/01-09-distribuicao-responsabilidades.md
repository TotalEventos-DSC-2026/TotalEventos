# Artefato 9 — Distribuição de responsabilidades

## Objetivo

Apresentar uma proposta de alocação das tarefas ao longo do desenvolvimento, mantendo rastreabilidade entre atividade, dependência e estado inicial.

| Identificador | Atividade técnica | Responsável designado | Dependências de execução | Estado inicial | Recomendações de comunicação |
| --- | --- | --- | --- | --- | --- |
| `UC01` | Epic principal | `A definir` | Todas as Sub-Issues | `Ready` | Acompanhamento do progresso geral e revisão de critérios |
| `SUB-01` | Modelar domínio e estados de ingresso | `A definir` | Nenhuma crítica | `Ready` | Revisão de regras de estado com a equipe |
| `SUB-02` | Modelar lotação e capacidade da sessão | `A definir` | `SUB-01` | `Ready` | Conferir limites e regras com quem cuida do evento |
| `SUB-03` | Implementar persistência SQLite e repositórios | `A definir` | `SUB-01`, `SUB-02` | `Backlog` | Validar contrato de persistência e transação |
| `SUB-04` | Implementar consulta da grade de sessões | `A definir` | `SUB-02`, `SUB-03` | `Ready` | Validar requisitos de filtros e resposta |
| `SUB-05` | Implementar check-in de ingresso por código QR | `A definir` | `SUB-01`, `SUB-02`, `SUB-03` | `Ready` | Revisar transação e cenários de falha |
| `SUB-06` | Implementar check-in de inscrição confirmada | `A definir` | `SUB-03` | `Backlog` | Confirmar regras de inscrição e duplicidade |
| `SUB-07` | Definir testes automatizados de unidade e integração | `A definir` | `SUB-04`, `SUB-05`, `SUB-06` | `Backlog` | Alinhar critérios de validação e evidências |

## Recomendação de governança

- Definir um responsável por cada atividade antes do início da implementação.
- Usar a matriz para identificar gargalos de dependência e evitar sobreposição entre módulos.
- Revisar os blocos críticos em reuniões curtas sempre que `SUB-05` ou `SUB-03` estiverem em execução.
- Manter a comunicação alinhada com a disciplina de desenvolvimento e a revisão do board.

# Artefato 8 — Planejamento do GitHub Project

## Objetivo

Propor a estrutura do GitHub Project em board Kanban conforme a metodologia didática, utilizando os 5 estados exigidos.

## Estados obrigatórios

1. `Backlog`
2. `Ready`
3. `In Progress`
4. `In Review`
5. `Done`

## Distribuição inicial das Issues e Sub-Issues

| Identificador | Título da atividade | Status inicial recomendado |
| --- | --- | --- |
| `UC01` | Consultar grade de sessões e registrar check-ins de eventos | `Ready` |
| `SUB-01` | Modelar domínio e estados de ingresso | `Ready` |
| `SUB-02` | Modelar lotação e capacidade da sessão | `Ready` |
| `SUB-03` | Implementar persistência SQLite e repositórios | `Backlog` |
| `SUB-04` | Implementar consulta da grade de sessões | `Ready` |
| `SUB-05` | Implementar check-in de ingresso por código QR | `Ready` |
| `SUB-06` | Implementar check-in de inscrição confirmada | `Backlog` |
| `SUB-07` | Definir testes automatizados de unidade e integração | `Backlog` |

## Sugestão de organização no board

- `Backlog`: atividades que ainda precisam de refinamento ou dependências operacionais.
- `Ready`: atividades com escopo definido e dependências mínimas para início.
- `In Progress`: execução ativa da atividade.
- `In Review`: validação técnica, revisão e correção de critérios.
- `Done`: atividade concluída e integrada.

## Observações

- A Epic deve ser mantida em `Ready` ao iniciar a implementação, mas pode ficar em `Backlog` até a confirmação da equipe sobre prioridade.
- Sub-Issues críticas como `SUB-05` devem entrar em `Ready` após a maturação da modelagem e da infraestrutura.
- O board deve ser mantido com os nomes exatos dos estados para aderir à metodologia didática.

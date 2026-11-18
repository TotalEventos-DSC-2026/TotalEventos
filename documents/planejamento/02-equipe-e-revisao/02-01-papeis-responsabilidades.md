# 02-01 — Matriz de Papéis e Responsabilidades

## Objetivo
Organizar a equipe responsável pela execução dos casos de uso do projeto TotalEventos, diferenciando papel funcional, atribuição técnica e revisão cruzada.

## Contexto
A etapa anterior definiu a base do projeto com os casos de uso e as Sub-Issues planejadas. Com a composição real da equipe já identificada, os papéis e responsabilidades passam a refletir os integrantes efetivos do projeto.

## Equipe definida
| Integrante | Usuário GitHub | Papel principal | Funções secundárias | Responsabilidades |
| --- | --- | --- | --- | --- |
| ManuMadeira | `ManuMadeira` | Coordenação | Técnico / Revisor | acompanhar prazos, remover impedimentos, alinhar board, validar o andamento do planejamento |
| Fernando | `sonwss` | Desenvolvedor | Técnico / Revisor | executar as atividades de domínio, API, persistência e testes, além de apoiar revisões técnicas |

## Estrutura funcional recomendada
| Papel | Responsabilidade principal | Integrante responsável |
| --- | --- | --- |
| Coordenador | acompanhamento da execução, bloqueios e comunicação geral | `ManuMadeira` |
| Responsável Técnico | arquitetura, decisões de design e revisão técnica | `ManuMadeira` |
| Desenvolvedor | execução das Sub-Issues atribuídas | `Fernando` |
| Revisor de Issues | validação dos critérios de aceite e revisão cruzada | `Fernando` |

## Regras de governança
- O papel funcional deve ser diferente da permissão técnica no GitHub.
- O responsável pela implementação não deve ser o mesmo do revisor da mesma Issue.
- O Coordenador não precisa receber acesso administrativo automático.
- A divisão de carga deve alternar entre os dois integrantes conforme dependência e complexidade das tarefas.

## Conclusão
A estrutura atual reflete a equipe real do projeto e permite uma governança enxuta, equilibrada e coerente com a escala do trabalho planejado.

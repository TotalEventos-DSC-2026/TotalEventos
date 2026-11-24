# 00 - Mapa da fonte de referencia

## Valores confirmados

| Variavel | Valor |
|---|---|
| REF | UC01 - Criar Evento |
| ENTIDADE | Evento |
| CAMPOS | id, titulo, descricao, dataInicio, dataFim, espacoFisicoId (ou local / espacoFisico), organizadorId, status, capacidade |
| ALVO | UC07 - Consultar Eventos Disponiveis |
| ARTEFATOS | `docs/planejamento/uc-listar-entidade/` |
| Versionamento | Nao solicitado; nenhum commit sera criado nesta etapa |

## Mapa fonte -> caminho real

| Fonte esperada | Encontrada? | Caminho real |
|---|---|---|
| Modelo de especificacao UC12 | Nao | Nao existe no workspace |
| `docs/planejamento/uc12-cadastrar-produto/uc-12.md` | Nao | Nao existe no workspace |
| Materiais `prompts/01` a `prompts/13` | Parcial | Os roteiros correspondentes estao em `documents/Pronts/` e no planejamento em `documents/planejamento/`; nao existe espaco `prompts/` |
| `docs/uc/` | Nao | Nao existe no workspace |
| `docs/adr/` | Nao | Nao existe no workspace |
| `project-profile.md` | Nao | Nao existe no workspace |
| `method/` | Nao | Nao existe no workspace |
| REF UC01 | Sim | `documents/04-invariantes-casos-de-uso.md`, `documents/planejamento/02-00-planejamento-geral-casos-de-uso.md`, `documents/planejamento/00-01-planejamento-epic-uc05-criar-evento.md` |

## Observacao

O REF informado pelo estudante nao usa o codigo UC01 de forma consistente em toda a documentacao: o documento oficial de UC lista UC01 como Criar Evento, enquanto um planejamento epico usa UC05 para Criar Evento. Esse conflito deve ser resolvido antes da implementacao.

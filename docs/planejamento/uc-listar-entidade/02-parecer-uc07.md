# 02 - Parecer comparativo do UC07

## Fonte avaliada

- `documents/04-invariantes-casos-de-uso.md`
- `documents/planejamento/02-00-planejamento-geral-casos-de-uso.md`

## Parecer item a item

| # | Requisito minimo ajustado | Atende? | Evidencia | Lacuna / acao |
|---|---|---|---|---|
| 1 | Identificacao completa (codigo, nome, sistema, modulo, tipo) | Parcial | UC07 identificado em dois documentos; nome e ator presentes | Falta especificacao completa, modulo HTTP/persistencia e tipo formal |
| 2 | Objetivo claro e verificavel | Sim | "Encontrar eventos com vagas abertas e visualizar a grade" | Vagas abertas nao esta ligada a uma modelagem confirmada de Evento |
| 3 | Ator(es) e permissao | Parcial | Participante; acesso publico ou autenticado nao declarado | Confirmar autenticacao e permissoes |
| 4 | Pre-condicoes | Nao | Nao descritas | Definir eventos publicados, dados carregados e disponibilidade do sistema |
| 5 | Pos-condicoes de sucesso e falha | Nao | Resultado observado citado apenas em geral | Definir resposta vazia, erro de persistencia e semantica HTTP |
| 6 | Fluxo principal numerado | Nao | Apenas resultado textual | Criar fluxo numerado |
| 7 | >= 1 fluxo alternativo | Nao | Nenhum fluxo alternativo documentado | Definir lista vazia e filtros sem resultado |
| 8 | >= 1 fluxo de excecao | Nao | Nenhuma falha de persistencia/infra descrita | Definir timeout, banco indisponivel e erro interno |
| 9 | Regras de negocio numeradas e confirmada/candidata | Nao | RN02 e RN04 afetam UC07, mas nao sao especificadas como RF da consulta | Marcar as aplicaveis e distinguir confirmadas de candidatas |
| 10 | Validacoes e restricoes | Nao | Filtros citados apenas em planejamento | Confirmar filtros, tipos, limites e paginacao |
| 11 | Requisitos funcionais numerados | Nao | Nao existem RF01+ | Criar requisitos vinculados aos campos |
| 12 | Consideracoes arquiteturais | Nao | Menção informal a grade-sessoes/consulta publica | Definir Repository, Service, Controller e DTO sem acoplamento |
| 13 | CAs verificaveis ligados a RF/RN | Nao | Nenhum CA dedicado ao UC07 | Criar CAs executaveis |
| 14 | Escopo e fora de escopo | Nao | Fora de escopo nao definido | Definir limite desta listagem |
| 15 | Rastreabilidade requisito -> criterio | Nao | Planejamento geral nao contem matriz do UC07 | Criar matriz RN/RF/FA/FE -> CA |
| 16 | Nao inventa regras | Parcial | Documentos distinguem pouco confirmado de proposta | Qualificar todas as lacunas como propostas |
| 17 | Entidade e dados retornados | Nao | Evento nao existe como entidade no codigo | Definir/confirmar modelo real e campos coerentes |

## Campos solicitados

| Campo solicitado | Retornado? | Justificativa |
|---|---|---|
| `id` | Nao confirmado | Identificador real da Entidade nao existe no codigo nem em ADR |
| `titulo` | Nao confirmado | Nao existe entidade/ORM Evento confirmado |
| `descricao` | Nao confirmado | Nao existe entidade/ORM Evento confirmado |
| `dataInicio` | Nao confirmado | Planejamentos usam datas em documentos de criacao, mas nao validam a entidade implementada |
| `dataFim` | Nao confirmado | Mesmo estado anterior |
| `espacoFisicoId` / `local` / `espacoFisico` | Nao confirmado | Existe somente como nome em planejamento; o codigo nao modela Evento |
| `organizadorId` | Nao confirmado | Atribuido a Organizadores, mas nao respaldado por entidade existente |
| `status` | Nao confirmado | Rascunho/publicado/cancelado sao citados em documentos, sem entidade ou enum confirmados |
| `capacidade` | Nao confirmado | O codigo implementa `capacidadeMaxima` em SessaoLotacao, nao capacidade de Evento |

## Classificacao

**UC Incompleto.**

## Lacunas prioritarias

1. Bloqueante: confirmar que a Entidade Evento existe ou foi especificada como pendencia antes desta listagem.
2. Bloqueante: resolver o conflito de codigos UC01/UC05/UC07 sem presumir o codigo do alvo.
3. Confirmar ator, autenticacao, filtros, paginacao e ordenacao.
4. Confirmar quais campos solicitados existem no dominio.
5. Confirmar visibilidade: apenas eventos publicados ou todos os estados.
6. Definir semantica de lista vazia e falha de persistencia.
7. Comparar o UC detalhado, caso exista em documento ou Issue nao localizado.

## Conflitos encontrados

- UC01 e UC05 aparecem como Criar Evento em documentos diferentes.
- UC07 existe apenas como especificacao resumida; nao existe implementacao HTTP de listagem.
- Os campos solicitados nao tem entidade ou persistencia correspondente.
- `capacidade` conflita potencialmente com `capacidadeMaxima` existente em SessaoLotacao.
- A operacao atual `GET /eventos/:eventoId/sessoes` nao representa listagem de Eventos.

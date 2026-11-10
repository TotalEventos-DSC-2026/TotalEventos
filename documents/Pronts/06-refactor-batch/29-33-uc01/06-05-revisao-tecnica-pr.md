# 06-05 — Revisão Técnica Individual dos Pull Requests

## Escopo e método

Foram inspecionados individualmente os diffs de #89–#85 contra `main`, seus commits/arquivos, status, reviews, comentários, requests de review e checks. Os cinco PRs estão abertos como Draft, com base `main`. No momento da consulta, todos indicavam `MERGEABLE`/`CLEAN`; isso não corrige escopo incompleto nem equivale a aprovação. Todos tinham zero reviews, comentários, requests de review e checks de CI.

Branches adjacentes não são ancestrais umas das outras. Portanto, os commits de um PR não foram tratados como commits exclusivos/herdados de outro; cada contagem abaixo é o diff do respectivo PR contra `main`.

## PR #89 — testes RED de entidade (Issue #29)

- Branch: `feature/29-sub-uc01-01-modelar-entidade-evento-red` → `main`; head `f1ede1512c90`.
- 3 commits; 10 arquivos: 9 artefatos RED e `test/evento-entity-red.test.ts`.
- Commits-alvo: `87ca994732` (preparação RED), `a1c81a289a` (teste de estado inicial) e `f1ede1512c` (evidência RED).
- Teste isolado é intencionalmente RED antes da implementação; a execução combinada GREEN no PR #85 passa.
- Parecer: teste rastreável, mas não integrável sozinho sem deixar a suíte principal vermelha. Artefatos de Issue #29 compõem o diff.

## PR #88 — testes RED de DTO (Issue #30)

- Branch: `feature/30-sub-uc01-02-definir-dto-e-valida-es-de-entrada-red` → `main`; head `a7690c764eec`.
- 31 commits; 38 arquivos: 1 teste (`test/evento-dto-red.test.ts`) e 37 documentos do Material 04.
- Commits-alvo identificados: `c1d2fcfdb6` (preparação RED) e `f419570273` (teste de campos obrigatórios). Os demais commits/documentos do diff incluem preparações RED de issues posteriores (#31–58); as branches não formam uma cadeia de ancestrais.
- Parecer: escopo documental amplamente maior que a Issue #30; teste isolado é RED por desenho. Reorganização de escopo antes de integrar.

## PR #87 — testes RED de datas (Issue #31)

- Branch: `feature/31-sub-uc01-03-implementar-regras-de-datas-e-estado-do-evento-red` → `main`; head `c204165019d5`.
- 30 commits; 37 arquivos: 1 teste (`test/evento-datas-red.test.ts`) e 36 documentos RED.
- Commits-alvo identificados: `27d8a2e59e` (preparação RED) e `c08288c74e` (teste de ordem das datas); demais documentos extrapolam a Issue e incluem issues posteriores.
- Parecer: teste isolado é RED por desenho e o diff tem escopo ampliado; não integrar sozinho.

## PR #86 — testes RED de persistência (Issue #32)

- Branch: `feature/32-sub-uc01-04-implementar-persist-ncia-do-evento-red` → `main`; head `a013d16624c9`.
- 29 commits; 36 arquivos: 1 teste (`test/evento-persistencia-red.test.ts`) e 35 documentos RED.
- Commits-alvo identificados: `af7c6ccea7` (preparação RED) e `fcd55605f4` (teste de persistência/leitura); demais documentos incluem preparação de issues além da #32.
- Parecer: teste isolado é RED por desenho e o diff tem escopo ampliado; não integrar sozinho.

## PR #85 — endpoint e implementação GREEN (Issues #29–#33)

- Branch: `feature/33-sub-uc01-05-expor-endpoint-de-cria-o-e-testes-red` → `main`; head `06ab46ec3779`.
- 35 commits; 56 arquivos: 9 de produção, 5 testes UC01, 8 artefatos Material 05 e 34 documentos RED.
- Commits relevantes: `b390797c33` (preparação RED #33), `3986ca40a4` (teste RED do endpoint), `f16165a19b` (implementação GREEN #29–#33); os commits Material 05 `3cdb7ff513` e `06ab46ec37` registram evidências/documentação. O diff também contém documentos de outras issues, incluindo preparação #34–58.
- Produção inclui entidade, DTO, serviço, controller, interface e adaptador SQLite, módulo e wiring/schema; cinco testes UC01 passam no estado combinado.
- Parecer: funcionalidade testada está GREEN localmente, mas há escopo documental fora da fatia, contrato REST ainda proposto e nenhuma revisão humana independente. Não aprovado para integração.

## Matriz comparativa dos PRs dependentes

| PR | Issue / branch → base | Conteúdo próprio identificado | Testes e aceite | Dependência e parecer |
|---|---|---|---|---|
| #89 | #29 / `feature/29-...` → `main` | 3 commits, 9 docs RED e 1 teste de entidade | teste RED isolado; coberto e verde na combinação #85 | Base para comportamento inicial; aguarda implementação; não integrar isolado |
| #88 | #30 / `feature/30-...` → `main` | 31 commits, 37 docs e 1 teste DTO | teste RED isolado; coberto e verde na combinação #85 | Depende conceitualmente de #29, não por ancestralidade Git; escopo contaminado |
| #87 | #31 / `feature/31-...` → `main` | 30 commits, 36 docs e 1 teste de datas | teste RED isolado; coberto e verde na combinação #85 | Depende de #29–30; escopo contaminado |
| #86 | #32 / `feature/32-...` → `main` | 29 commits, 35 docs e 1 teste de persistência | teste RED isolado; coberto e verde na combinação #85 | Depende de #29–31; escopo contaminado |
| #85 | #33 / `feature/33-...` → `main` | 35 commits, 9 arquivos de produção, 5 testes e 42 documentos | 5/5 UC01 e 23/23 suíte local; aceite integral/contrato ainda pendente | Consolida a combinação GREEN, mas não contém branches anteriores como ancestrais; escopo ampliado |

As descrições de commits acima identificam commits-alvo, não uma afirmação de que os PRs dependentes compartilham histórico. PRs #89–#86 são testes RED; PR #85 reúne os cinco testes com a implementação GREEN. O relatório detalhado da integração está em `06-07-avaliacao-integracao.md`.

## Revisores e apontamentos

- Parecer técnico produzido por IA (Copilot SDK), registrado neste artefato.
- Autoavaliação do autor: não apresentada como revisão independente.
- Revisão humana: nenhuma review/request encontrada; permanece pendente.
- Comentários de review no GitHub: nenhum recebido; nenhum comentário de linha foi publicado nesta análise.
- Não foi identificado defeito de produção específico que justifique abrir comentário de código nesta etapa. Os bloqueios são de escopo, estado RED das branches de teste, validação do contrato e governança.

## Pareceres individuais

| PR | Parecer técnico de IA | Prontidão |
|---|---|---|
| #89 | Ajustes/reestruturação de escopo necessários; teste RED não deve chegar sozinho a `main`. | Aguardando |
| #88 | Ajustes de escopo; teste RED não deve chegar sozinho a `main`. | Aguardando |
| #87 | Ajustes de escopo; teste RED não deve chegar sozinho a `main`. | Aguardando |
| #86 | Ajustes de escopo; teste RED não deve chegar sozinho a `main`. | Aguardando |
| #85 | GREEN local confirmado; validar contrato, revisar por par e reduzir/justificar escopo documental. | Aguardando |

Este é parecer de IA, não aprovação humana, não decisão da equipe e não autorização para merge.

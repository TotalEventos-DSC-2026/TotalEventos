# 03 - Planejamento GitHub proposto

Nenhum Issue, label, Project ou estado foi criado nesta etapa.

## Issue principal proposta

`[UC07] Listar Eventos`

## Sub-Issues propostas

| Sub-Issue | Objetivo | Dependencia |
|---|---|---|
| `[UC07-SUB01] Especificar o modelo efetivo de Evento` | Confirmar entidade, identificador e campos persistidos | Obrigatoria; bloqueia todas as demais |
| `[UC07-SUB02] Definir contrato de consulta e filtros` | Confirmar ator, paginacao, filtros, ordenacao e semantica vazia | Obrigatoria |
| `[UC07-SUB03] Ampliar o Repository de Evento` | Adicionar consulta aditiva sem acoplamento a infraestrutura | Depende de SUB01 |
| `[UC07-SUB04] Implementar o Service de listagem` | Aplicar regras aprovadas e ordenar os resultados | Depende de SUB02 e SUB03 |
| `[UC07-SUB05] Implementar persistencia real` | Criar adaptador SQLite/PostgreSQL e mapper conforme arquitetura existente | Depende de SUB01 e SUB03 |
| `[UC07-SUB06] Expor GET /eventos` | Criar Controller e DTO de resposta com os campos aprovados | Depende de SUB02 e SUB04 |
| `[UC07-SUB07] Testes de unidade, integracao e contrato` | Cobrir sucesso, vazio, filtros, persistencia e formato HTTP | Depende de SUB04, SUB05 e SUB06 |
| `[UC07-SUB08] Atualizar documentacao e evidencias` | Consolidar API, testes e rastreabilidade | Depende da entrega funcional |

## Labels propostas

- `use-case`
- `enhancement`
- `domain`
- `backend`
- `documentation`
- `needs-spec`
- `blocker`
- `tests`

## Estados iniciais

Todos os estados partiriam de `Backlog`; nao foi criado Project.

## Dependencias

- Obrigatoria: resolucao da modelagem de Evento e dos campos solicitados.
- Obrigatoria: validacao do UC07 pelo estudante.
- Contexto: persistencia SQLite/PostgreSQL existente e padroes dos modulos atuais.

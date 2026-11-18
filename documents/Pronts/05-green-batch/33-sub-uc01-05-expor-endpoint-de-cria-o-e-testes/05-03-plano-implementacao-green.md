# 05-03 — Plano de Implementação GREEN

## Objetivo

Implementar o mínimo necessário para os cinco testes de integração UC01 #29–33 passarem no mesmo branch de trabalho, mantendo inalteradas suas asserções.

| Arquivo | Responsabilidade | Estado | Alteração mínima |
|---|---|---|---|
| `src/app.module.ts` | Composição NestJS | Sem módulo de eventos | Importar `EventosModule` |
| `src/database/sqlite-database.ts` | Schema compartilhado SQLite | Sem tabela de eventos | Criar tabela `eventos` |
| `src/modules/eventos/entities/evento.entity.ts` | Entidade de domínio | Ausente | Dados, estado inicial `RASCUNHO` e validação temporal |
| `src/modules/eventos/dto/criar-evento.dto.ts` | Borda de entrada | Ausente | Validar campos, tipos, datas ISO e UUID |
| `src/modules/eventos/repositories/eventos.repository.interface.ts` | Porta de persistência | Ausente | Contrato `save` e `findById` |
| `src/modules/eventos/repositories/sqlite-eventos.repository.ts` | Adaptador SQLite | Ausente | Inserir e recuperar evento |
| `src/modules/eventos/services/eventos.service.ts` | Aplicação | Ausente | Criar entidade, persistir e buscar; mapear erro de domínio para HTTP 400 |
| `src/modules/eventos/controllers/eventos.controller.ts` | HTTP | Ausente | `POST /eventos` e `GET /eventos/:id` |
| `src/modules/eventos/eventos.module.ts` | Injeção de dependência | Ausente | Registrar e exportar serviço/repositório |

## Regras de implementação

- Criar identificador UUID com `node:crypto`.
- Estado inicial explícito `RASCUNHO`.
- `descricao` opcional; título, datas e UUID do espaço obrigatórios.
- Rejeitar datas inválidas ou `dataFim <= dataInicio`; rejeitar início anterior ao instante atual.
- Persistir datas ISO-8601 e recuperar o registro salvo.
- Responder 404 em consulta de evento inexistente e 400 para entrada inválida.
- Não instalar dependências nem modificar os contratos dos testes.

## Critério GREEN

Build TypeScript aprovado; os cinco testes previamente RED aprovados; suíte completa avaliada; nenhum teste/asserção alterado. O contrato HTTP proposto continua sujeito à validação da equipe.

## Riscos

- A implementação cobre mais de uma Sub-Issue porque os testes de entidade, datas e persistência usam o mesmo endpoint de criação como pré-condição.
- Validação manual será necessária porque o projeto não declara `class-validator`.
- A tabela não possui FK para espaço físico: o projeto ainda não dispõe de agregado/repositório de espaço físico. Não inventar tabela ou regra de existência nesta etapa.

# 05-04 — Implementação GREEN

## Identificação

- Escopo: UC01, issues #29–33.
- Branch isolada: `feature/uc01-29-33-green`.
- Implementação: módulo NestJS de eventos, entidade, DTO, serviço e adaptador SQLite.
- Asserções dos cinco testes foram preservadas.

## Arquivos

- Criado `src/modules/eventos/entities/evento.entity.ts`.
- Criado `src/modules/eventos/dto/criar-evento.dto.ts`.
- Criado `src/modules/eventos/repositories/eventos.repository.interface.ts`.
- Criado `src/modules/eventos/repositories/sqlite-eventos.repository.ts`.
- Criado `src/modules/eventos/services/eventos.service.ts`.
- Criado `src/modules/eventos/controllers/eventos.controller.ts`.
- Criado `src/modules/eventos/eventos.module.ts`.
- Modificado `src/database/sqlite-database.ts` para criar a tabela `eventos`.
- Modificado `src/app.module.ts` para registrar `EventosModule`.

## Relação implementação → asserções

1. `CriarEventoDto.from` recebe corpo não confiável como `unknown`, exige objeto, título não vazio, datas ISO válidas e UUID v4; falhas geram HTTP 400. `descricao` permanece opcional. Atende #30.
2. `Evento.criar` verifica que o início não está no passado e que o término é posterior ao início, e inicia o ciclo de vida em `RASCUNHO`. `EventoStatus` representa `RASCUNHO`, `PUBLICADO` e `CANCELADO`. Atende #29 e #31.
3. O serviço gera ID com `randomUUID`, cria a entidade e delega persistência ao contrato `EventosRepository`; erro de período é convertido para HTTP 400. Atende os critérios positivos e negativos de criação.
4. `SqliteEventosRepository.save` grava colunas nomeadas e valores parametrizados; `findById` lê o registro e `Evento.reconstituir` recupera inclusive eventos cuja data de início já passou. Atende #32.
5. `EventosController` expõe `POST /eventos` (Nest responde 201) e `GET /eventos/:id` (200; 404 se inexistente). Atende #33 e a leitura exercitada por #32.
6. `EventosModule` registra controller, serviço e adaptador; `AppModule` importa o módulo. A tabela é criada no schema do `SqliteDatabase`.

## O que foi deliberadamente postergado

- Transições de publicação/cancelamento, concorrência, regras de espaço físico e outros critérios fora dos cinco testes.
- DTO de resposta dedicado e configuração de validação declarativa; a dependência `class-validator` não existe no manifesto atual.
- Integração referencial com um agregado de espaços físicos, pois não há tabela/repositório desse agregado nesta base.
- Refatoração de arquitetura além do necessário para o fluxo testado (Material 06).

Os contratos REST e campos são propostas adotadas para desbloquear os testes e ainda precisam de validação da equipe.

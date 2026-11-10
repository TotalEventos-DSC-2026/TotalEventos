# Relatório de Planejamento — SUB-02 (#3): [UC05] Criar DTO de Cadastro de Evento (CriarEventoDto)

## 1. Objetivo da Sub-Tarefa
Desenvolver o contrato de entrada `CriarEventoDto` na fronteira HTTP do módulo de eventos (`src/modules/eventos/dto/criar-evento.dto.ts`), utilizando os decoradores do `class-validator` para assegurar que apenas requisições estruturalmente corretas alcancem os serviços de aplicação e domínio.

## 2. Estrutura do DTO e Validações Declarativas
* **`titulo` (`string`):** Obrigatório (`@IsNotEmpty`), tipo texto (`@IsString`).
* **`descricao` (`string`):** Opcional (`@IsOptional`), tipo texto (`@IsString`).
* **`dataInicio` (`string`):** Obrigatório (`@IsNotEmpty`), formato ISO 8601 válido (`@IsDateString`).
* **`dataFim` (`string`):** Obrigatório (`@IsNotEmpty`), formato ISO 8601 válido (`@IsDateString`).
* **`espacoFisicoId` (`string`):** Obrigatório (`@IsNotEmpty`), UUID v4 válido (`@IsUUID('4')`).

## 3. Critérios de Aceite
* [ ] DTO `CriarEventoDto` implementado na pasta `src/modules/eventos/dto/` seguindo as convenções do NestJS.
* [ ] Validações declarativas aplicadas a todos os atributos obrigatórios e opcionais.
* [ ] Payloads inválidos ou malformatados interceptados pelo `ValidationPipe` retornando HTTP 400 Bad Request.

## 4. Próximos Passos
* Criar a classe `CriarEventoDto` com as mensagens de erro customizadas do `class-validator`.
* Implementar testes de validação no Pipe de entrada para cobrir requisições aceitas e rejeitadas.
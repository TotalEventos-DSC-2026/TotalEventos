# Relatório de Planejamento — [SUB-04] Implementar Consulta da Grade de Sessões

## 1. Objetivo da Sub-Tarefa
Desenvolver a rota de API e a camada de serviço responsáveis por disponibilizar a consulta da grade de sessões de um evento, permitindo a filtragem por data, horário e sala.

## 2. Regras de Negócio e Filtros
* **Status Permitidos:** A consulta deve obrigatoriamente retornar apenas sessões com status `PUBLICADA` e `ATIVA`.
* **Tratamento de Filtros:** Parâmetros de consulta (query params) inválidos devem ser interceptados por pipes de validação, retornando status `400 Bad Request`.
* **Retorno Vazio:** Quando nenhum registro corresponder aos filtros aplicados, a API deve retornar uma lista vazia (`sessoes: []`) com status `200 OK`.

## 3. Critérios de Aceite
* [ ] Consulta retorna `sessoes: []` para ausência de registros relevantes.
* [ ] Filtros inválidos geram erro `400 Bad Request`.
* [ ] A resposta contém apenas sessões publicadas e ativas.

## 4. Próximos Passos
* Implementar o Query DTO com `class-validator` para validar parâmetros de entrada.
* Implementar o método no Repository/Service para consulta parametrizada no SQLite.
* Criar os testes unitários e de integração para validar cenários de sucesso, lista vazia e erro 400.
# Relatório de Planejamento — [SUB-06] Implementar Check-in de Inscrição Confirmada

## 1. Objetivo da Sub-Tarefa
Registrar a entrada no evento de inscrições previamente confirmadas, garantindo que inscrições pendentes/canceladas sejam rejeitadas e impedindo a reutilização/duplicidade do check-in.

## 2. Regras de Negócio e Validações
* **Status Permitido:** Somente inscrições com status `CONFIRMADA` podem realizar o check-in.
* **Bloqueio de Duplicidade:** Se a inscrição já possuir registro de check-in efetuado, o sistema deve retornar erro de conflito (409 Conflict ou exceção de negócio).
* **Estados Inválidos:** Inscrições nos estados `PENDENTE` ou `CANCELADA` devem ser bloqueadas com mensagem descritiva.

## 3. Critérios de Aceite
* [ ] Inscrição confirmada aceita com sucesso.
* [ ] Inscrição pendente/cancelada rejeitada.
* [ ] Check-in duplicado bloqueado.

## 4. Próximos Passos
* Implementar rota no Controller e método no Service responsável pelo check-in.
* Criar testes unitários e de integração cobrindo os cenários de sucesso, erro de estado e duplicidade.
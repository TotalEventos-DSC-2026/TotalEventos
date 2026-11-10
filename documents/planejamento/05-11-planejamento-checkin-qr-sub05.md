# Relatório de Planejamento — [SUB-05] Implementar Check-in de Ingresso por Código QR

## 1. Objetivo da Sub-Tarefa
Implementar a rota e o serviço responsável pelo check-in presencial via leitura de QR Code, assegurando atomicidade na alteração do status do ingresso (de `EMITIDO` para `UTILIZADO`) e no controle da capacidade/lotação da sessão.

## 2. Regras de Negócio e Validações Transacionais
* **Validação do Estado do Ingresso:** O ingresso deve obrigatoriamente estar no estado `EMITIDO`. Caso já esteja `UTILIZADO` ou `CANCELADO`, a operação deve ser rejeitada.
* **Capacidade da Sessão:** O check-in deve verificar se a sessão ainda possui vagas disponíveis antes de decrementar/incrementar a lotação.
* **Garantia de Transação:** A alteração do ingresso e a atualização da lotação da sessão devem ocorrer na mesma transação de banco de dados (rollback total em caso de falha).

## 3. Critérios de Aceite
* [ ] Check-in com QR válido atualiza ingresso e lotação.
* [ ] QR Code já utilizado é rejeitado com erro.
* [ ] Sessão sem vagas rejeita a operação.
* [ ] Erros de validação retornam status e mensagem explicativos.

## 4. Próximos Passos
* Implementar o endpoint HTTP e o serviço transacional NestJS.
* Criar os testes unitários e de integração cobrindo cenários de sucesso, tentativa de reutilização e lotação esgotada.
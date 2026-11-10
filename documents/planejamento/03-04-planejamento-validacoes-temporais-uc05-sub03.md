# Relatório de Planejamento — SUB-03 (#3): [UC05] Implementar Validações de Dados e Regras Temporais do Evento

## 1. Objetivo da Sub-Tarefa
Desenvolver a camada de validação e verificação de regras de negócio temporais para a criação de eventos no UC05, garantindo que inconsistências nas datas de início e término sejam identificadas e bloqueadas na camada de domínio.

## 2. Regras de Validação e Restrições Temporais
* **Validação de Data Inicial:** `dataInicio` deve ser estritamente maior ou igual à data e hora atual do sistema no momento do cadastro.
* **Consistência de Período:** `dataFim` deve ser estritamente posterior à `dataInicio` (`dataFim > dataInicio`).
* **Tratamento de Exceções:** Lançar exceções de domínio descritivas (ex: `DataInicioInvalidaException`, `PeriodoEventoInvalidoException`) para impedir a propagação de dados inconsistentes para os repositórios.

## 3. Critérios de Aceite
* [ ] Sistema rejeita cadastro de evento com data de início retroativa.
* [ ] Sistema impede criação de evento com data de término anterior ou igual à data de início.
* [ ] Exceções claras são disparadas no descumprimento das regras temporais.
* [ ] Testes unitários cobrem todos os cenários de validação temporal com sucesso.

## 4. Próximos Passos
* Implementar os validadores e métodos de domínio na entidade `Evento` ou em `DomainService`.
* Criar a suíte de testes unitários em Vitest/Jest cobrindo cenários de sucesso e falhas de validação.
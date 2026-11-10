# Relatório de Planejamento — [SUB-01] Modelar Domínio e Estados de Ingresso

## 1. Objetivo da Sub-Tarefa
Modelar a entidade de domínio `Ingresso` e definir o seu ciclo de vida (enum de estados), garantindo as regras de negócio para alteração de estado no momento do check-in.

## 2. Regras de Negócio e Ciclo de Vida
* **Estados Possíveis:**
  * `EMITIDO`: Ingresso válido e apto para realizar check-in.
  * `UTILIZADO`: Check-in efetuado com sucesso; ingresso não pode ser reutilizado.
  * `CANCELADO`: Ingresso invalidado; check-in bloqueado.
* **Regra de Transição de Estado:**
  * O método de domínio `marcarComoUtilizado()` deve verificar se o estado atual é `EMITIDO`. 
  * Se o estado for `UTILIZADO` ou `CANCELADO`, deve lançar uma exceção de domínio (ex: `IngressoInvalidoException` ou `EstadoIngressoInvalidoException`).

## 3. Critérios de Aceite
* [ ] A entidade expõe o estado atual do ingresso.
* [ ] O check-in exige que o ingresso esteja no estado `EMITIDO`.
* [ ] Um ingresso já utilizado ou cancelado é rejeitado.

## 4. Próximos Passos
* Criar o enum `EstadoIngresso` e a entidade `Ingresso` na camada de domínio.
* Implementar os testes unitários isolados para validar transições de estado permitidas e rejeitadas.
# Relatório de Planejamento — [SUB-02] Modelar Lotação e Capacidade da Sessão

## 1. Objetivo da Sub-Tarefa
Modelar a entidade Sessão e os seus métodos de domínio responsáveis pelo controlo de lotação, assegurando que o sistema bloqueie novas entradas quando a capacidade máxima for atingida.

## 2. Regras de Negócio e Validações
* **Controlo de Capacidade:** Cada sessão possui uma capacidade máxima definida. A ocupação atual não pode exceder este limite em momento algum.
* **Cálculo de Disponibilidade:** Método de domínio que retorna a quantidade de vagas restantes (`vagasDisponiveis = capacidadeMaxima - ocupacaoAtual`).
* **Incremento Seguro:** O método de registo de entrada deve validar a disponibilidade antes de incrementar a ocupação. Se `vagasDisponiveis <= 0`, deve ser lançada uma exceção de domínio (ex: `CapacidadeExcedidaException`).

## 3. Critérios de Aceite
* [ ] Sessão com capacidade máxima rejeita nova entrada.
* [ ] A ocupação aumenta em uma unidade por check-in aceito.
* [ ] A disponibilidade é calculada corretamente.

## 4. Próximos Passos
* Implementar os atributos e métodos de lotação na entidade de Sessão (`Sessao.entity.ts` ou classe de domínio).
* Criar os testes unitários isolados para validar estouro de capacidade e cálculo de vagas.
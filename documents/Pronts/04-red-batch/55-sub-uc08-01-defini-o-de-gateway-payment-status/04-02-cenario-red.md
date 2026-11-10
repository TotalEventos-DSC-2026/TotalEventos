## Cenário proposto

Mapear resposta explícita e local do gateway para o estado de pagamento correspondente, sem permitir que o cliente controle o resultado.

Estados propostos: `PENDENTE`, `APROVADO`, `RECUSADO`, `FALHA` (pendentes de validação).

**Resultado atual:** bloqueado. `AppModule` não possui endpoint/provider de pagamento para injeção do fake; comportamento de domínio não foi exercitado.

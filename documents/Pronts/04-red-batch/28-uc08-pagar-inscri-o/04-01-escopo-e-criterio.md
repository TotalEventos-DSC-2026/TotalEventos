## Escopo RED — Issue #28

Critério selecionado: confirmar inscrição paga somente depois da aprovação do pagamento.

O usuário definiu que o gateway falso pode existir somente nos testes, com resposta configurada explicitamente para cada cenário. A proposta permanece pendente de validação da equipe.

**Bloqueado:** o `AppModule` não possui endpoint de pagamento nem provider de gateway que permita injetar esse fake sem alterar produção. Não afirmar resultado RED até existir esse seam.

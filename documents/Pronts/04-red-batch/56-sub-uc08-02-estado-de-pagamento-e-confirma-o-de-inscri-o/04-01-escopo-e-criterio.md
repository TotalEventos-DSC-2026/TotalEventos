## Escopo RED — Issue #56

Critério selecionado: inscrição pendente só se torna confirmada e reserva a vaga após aprovação do pagamento.

Proposta do usuário: fake local somente em testes, com resposta explicitamente configurada por cenário; pendente de validação da equipe.

**Bloqueado:** não existe endpoint/provider de pagamento no `AppModule` para injetar o fake. Sem seam, não é possível validar transição da inscrição sem alterar produção.

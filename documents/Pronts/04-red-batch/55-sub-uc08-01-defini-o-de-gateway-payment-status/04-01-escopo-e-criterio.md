## Escopo RED — Issue #55

Critério selecionado: definir estados explícitos de pagamento e abstrair o gateway sem expor o resultado ao cliente.

Proposta do usuário: fake local somente em testes, com resposta configurada explicitamente para cada cenário; pendente de validação da equipe.

**Bloqueado:** não existe endpoint de pagamento nem gateway provider/seam em `AppModule`. Não testar somente o fake nem declarar estados de produção inexistentes.

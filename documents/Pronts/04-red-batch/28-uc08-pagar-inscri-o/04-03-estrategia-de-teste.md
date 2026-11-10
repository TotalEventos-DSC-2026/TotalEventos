## Estratégia de teste

O teste `node:test` inicializa o `AppModule` com SQLite temporário em `.red-test-28`, removido pelo hook de encerramento.

Contrato proposto (pendente de validação da equipe): fake local somente em testes, com resposta explicitamente configurada por cenário; nunca aceitar resultado no request nem chamar gateway real.

O cenário está explicitamente skipped porque não existe endpoint de pagamento ou provider de gateway para injeção no `AppModule`. Não criar um teste que valide somente o próprio fake ou que afirme sucesso sem exercitar código de produção.

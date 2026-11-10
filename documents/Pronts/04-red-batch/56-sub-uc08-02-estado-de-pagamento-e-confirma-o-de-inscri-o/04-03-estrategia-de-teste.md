## Estratégia

O teste TypeScript `node:test` inicializa `AppModule` e SQLite temporário em `.red-test-56`, removido pelo hook `after`.

Proposta pendente de validação: fake apenas em testes; configurar explicitamente a aprovação dentro do cenário; nunca aceitar resultado do cliente nem chamar gateway real.

O cenário está explicitamente skipped porque não existe endpoint/provider injetável no `AppModule`. Não fabricar uma inscrição nem afirmar confirmação sem executar o fluxo de produção.

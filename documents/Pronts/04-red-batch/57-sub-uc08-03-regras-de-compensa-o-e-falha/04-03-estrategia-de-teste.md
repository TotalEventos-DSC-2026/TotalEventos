## Estratégia

O teste TypeScript `node:test` inicializa `AppModule` e SQLite temporário em `.red-test-57`, removido pelo hook `after`.

Proposta pendente de validação: fake apenas em testes; configurar explicitamente recusa e falha por cenário; nunca aceitar resultado do cliente nem chamar gateway real.

O teste está explicitamente skipped porque não existe endpoint/provider de gateway injetável no `AppModule`. Não fabricar compensação ou liberação de vaga em teste independente do fluxo de produção.

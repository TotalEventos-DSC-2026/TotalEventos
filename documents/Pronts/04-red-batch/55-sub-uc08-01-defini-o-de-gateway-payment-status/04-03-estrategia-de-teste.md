## Estratégia

O teste TypeScript `node:test` inicializa `AppModule` e SQLite temporário em `.red-test-55`, removido pelo hook `after`.

Proposta pendente de validação: fake somente em teste; configurar explicitamente uma resposta diferente em cada cenário; não enviar resultado no request nem chamar gateway externo.

O cenário está explicitamente skipped porque não existe endpoint/provider de gateway injetável no `AppModule`. A execução não valida o fake isoladamente nem afirma comportamento de produção.

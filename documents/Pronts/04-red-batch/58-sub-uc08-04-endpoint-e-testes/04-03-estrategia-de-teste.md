## Estratégia

O teste TypeScript `node:test` inicializa `AppModule` e SQLite temporário em `.red-test-58`, removido pelo hook `after`.

Proposta pendente de validação: fake apenas em testes com uma resposta explícita por cenário (aprovação/recusa); não aceitar resultado no request nem chamar gateway real.

O cenário está explicitamente skipped: não há endpoint/provider injetável nem fixture executável de inscrição. Não criar teste de sucesso isolado do fluxo de produção.

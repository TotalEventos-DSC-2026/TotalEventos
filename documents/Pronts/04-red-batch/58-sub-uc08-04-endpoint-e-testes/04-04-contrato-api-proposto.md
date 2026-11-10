## Contrato de endpoint/pagamento proposto — pendente de validação da equipe

- `POST /inscricoes/:id/pagamentos`, sem resultado controlado pelo cliente.
- Fake gateway somente em testes, com aprovação/recusa configuradas explicitamente por cenário.
- Aprovado → HTTP 201 e recusado → HTTP 402 são respostas propostas, ainda não aprovadas.
- Setup proposto de inscrição e campos de resposta ainda precisam de validação; não reutilizar como fixture real.
- O endpoint/provider não existe em `AppModule`; execução permanece bloqueada.

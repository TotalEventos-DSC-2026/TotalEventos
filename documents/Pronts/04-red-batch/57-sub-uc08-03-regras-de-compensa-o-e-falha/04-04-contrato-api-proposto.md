## Contrato de falha/compensação proposto — pendente de validação da equipe

- `POST /inscricoes/:id/pagamentos`; request sem resultado controlado pelo cliente.
- Fake gateway somente em testes; configurar explicitamente recusa/falha em cada cenário.
- Recusa → HTTP 402 sem confirmação é uma proposta pendente.
- Regras de falha de processamento, reversão, auditoria, rastreabilidade e liberação de vaga ainda exigem decisão da equipe.
- Não existe endpoint/provider no `AppModule`; o teste de domínio permanece bloqueado.

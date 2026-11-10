## Contrato de pagamento proposto — pendente de validação da equipe

- `POST /inscricoes/:id/pagamentos`; o request não fornece resultado.
- Fake gateway somente em testes, com resposta aprovada explicitamente configurada neste cenário.
- Aprovação → HTTP 201 e `CONFIRMADA` somente após aprovação são propostas pendentes de validação.
- Campos de resposta/pagamento e preparação da inscrição seguem pendentes de acordo da equipe.
- Não existe endpoint/provider no `AppModule`; o teste de confirmação permanece bloqueado.

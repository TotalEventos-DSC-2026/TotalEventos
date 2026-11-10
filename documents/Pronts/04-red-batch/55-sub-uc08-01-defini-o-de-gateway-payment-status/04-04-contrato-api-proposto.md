## Contrato de pagamento proposto — pendente de validação da equipe

- `POST /inscricoes/:id/pagamentos`, sem resultado controlado pelo cliente (corpo vazio/ausente ainda depende da equipe).
- Estados propostos: `PENDENTE`, `APROVADO`, `RECUSADO`, `FALHA`.
- Testes futuros podem injetar fake local e configurar explicitamente cada resposta.
- Aprovado → HTTP 201 e recusado → HTTP 402 são propostas, não contrato aprovado.
- Atualmente não há endpoint nem gateway port no `AppModule`; execução permanece bloqueada.

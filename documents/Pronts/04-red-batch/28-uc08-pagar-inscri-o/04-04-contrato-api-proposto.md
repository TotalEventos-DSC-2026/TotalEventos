## Contrato REST/pagamento proposto — pendente de validação da equipe

- `POST /inscricoes/:id/pagamentos`; o request não escolhe o resultado. Corpo vazio/ausente ainda depende de decisão da equipe.
- Status propostos: `PENDENTE`, `APROVADO`, `RECUSADO`, `FALHA`.
- Resposta do fake deverá ser configurada explicitamente dentro de cada teste e permanecer local/test-only.
- Resultado aprovado → HTTP 201; recusado → HTTP 402 (proposta ainda não aprovada).
- Não existe endpoint nem gateway port no código atual. O teste segue bloqueado; nenhum resultado foi simulado.

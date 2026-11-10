## Cenário proposto

`POST /inscricoes/:id/pagamentos` deve delegar a decisão ao gateway e confirmar a inscrição somente após aprovação.

Em testes futuros, cada cenário deverá configurar localmente uma resposta explícita no fake (por exemplo, aprovação, recusa ou falha). O cliente não escolhe o resultado e nenhum teste chama gateway externo.

**Resultado atual:** não executável. O endpoint e o provider injetável não existem no `AppModule`; nenhuma regra de pagamento foi alcançada.

# 04-04 — Especificacao do Teste RED

## Criterio
Expor a operacao HTTP de cancelamento e persistir estado CANCELADA para inscricao confirmada.

## Teste
`test/uc04-46-endpoint-cancelamento-red.test.ts` exercita a rota/seam proposto e espera o comportamento descrito na issue.

## Contrato proposto
Proposta: POST /inscricoes/{id}/cancelar com HTTP 200/204; validar com a equipe.

## Limite da evidencia
HTTP 404 em vez de 200/204; o status persistido nao foi verificado. A rota proposta retorna 404; a assercao sobre inscricao persistida nao foi alcancada.
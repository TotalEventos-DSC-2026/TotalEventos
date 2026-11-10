# 04-04 — Especificacao do Teste RED

## Criterio
Expor endpoint de cancelamento de evento e validar o fluxo principal.

## Teste
`test/uc06-50-endpoint-cancelamento-red.test.ts` exercita a rota/seam proposto e espera o comportamento descrito na issue.

## Contrato proposto
Proposta: POST /eventos/{id}/cancelar com HTTP 200/204; validar com a equipe.

## Limite da evidencia
HTTP 404 em vez de 200/204; o fluxo principal nao foi alcancado. Nao ha modulo/agregado de eventos no AppModule; rota proposta retorna 404.
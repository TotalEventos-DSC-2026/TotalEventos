# 04-04 — Especificacao do Teste RED

## Criterio
Representar explicitamente o evento cancelado e aplicar uma transicao valida.

## Teste
`test/uc06-47-estado-cancelamento-red.test.ts` exercita a rota/seam proposto e espera o comportamento descrito na issue.

## Contrato proposto
Proposta: POST /eventos/{id}/cancelar; status HTTP 200/204 assumido, validar com a equipe.

## Limite da evidencia
HTTP 404 em vez de 200/204; o estado do evento nao foi observado. Nao ha modulo/agregado de eventos no AppModule; rota ausente retorna 404.
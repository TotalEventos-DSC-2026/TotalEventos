# 04-04 — Especificacao do Teste RED

## Criterio
Iniciar o tratamento de participantes afetados por cancelamento de evento.

## Teste
`test/uc06-48-participantes-cancelamento-red.test.ts` exercita a rota/seam proposto e espera o comportamento descrito na issue.

## Contrato proposto
Proposta: POST /eventos/{id}/cancelar; status HTTP 200/204 assumido, validar com a equipe.

## Limite da evidencia
HTTP 404 em vez de 200/204; nenhum participante ou notificacao foi exercitado. A rota proposta retorna 404. Nao ha fluxo evento-participantes nem limite de notificacao definido para exercitar.
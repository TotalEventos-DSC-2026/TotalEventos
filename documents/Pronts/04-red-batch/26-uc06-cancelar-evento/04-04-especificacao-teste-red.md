# 04-04 — Especificacao do Teste RED

## Cenario
Enviar pedido de cancelamento para evento elegivel e receber resposta de sucesso.

## Contrato de transporte proposto
- Rota assumida: `POST /eventos/{eventoId}/cancelar`.
- Respostas de sucesso assumidas: HTTP 200 ou 204.
- Rota e codigos sao hipoteses pendentes de validacao; nao sao contrato implementado.

## Limite da evidencia
A resposta observada foi 404. Nenhuma entidade/evento foi preparada e o teste nao alcanca validacao do estado, participantes ou visibilidade apos cancelamento.
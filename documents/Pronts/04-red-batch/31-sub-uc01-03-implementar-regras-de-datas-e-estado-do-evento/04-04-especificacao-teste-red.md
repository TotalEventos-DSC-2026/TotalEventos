# 04-04 — Especificação do Teste RED

## Cenário
Enviar para `POST /eventos` um evento cujo `dataFim` é anterior a `dataInicio`; esperar HTTP 400, conforme o critério da issue #31.

## Contrato REST proposto
Payload inclui `titulo`, `dataInicio`, `dataFim` e `espacoFisicoId`. Rota, formato e status são propostas pendentes de validação da equipe.

## Nível
Integração HTTP com aplicação Nest e SQLite temporário. Teste em `test/evento-datas-red.test.ts`.

O build funciona, mas atualmente a requisição recebe 404 antes da validação temporal. O teste não altera as asserções para contornar a ausência da rota.

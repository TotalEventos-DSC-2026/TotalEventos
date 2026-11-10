# 04-04 — Especificação do Teste RED

## Critério
Após criar um evento, uma consulta pelo identificador deve recuperar o registro com o mesmo título.

## Contrato REST proposto
1. `POST /eventos` com título, descrição, datas futuras e `espacoFisicoId`; sucesso 201 e JSON contendo `id` e `titulo`.
2. `GET /eventos/:id`; sucesso 200 com o mesmo `titulo`.

Os caminhos e o formato JSON são propostas pendentes de validação da equipe.

## Nível
Integração HTTP com aplicação Nest e SQLite temporário. Teste: `test/evento-persistencia-red.test.ts`.

## Limite da evidência
O teste falha na criação (404 vs 201); a consulta e a persistência ainda não foram exercitadas.

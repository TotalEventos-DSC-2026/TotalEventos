# 04-04 — Especificação do Teste RED

## Critério
Uma criação válida via endpoint HTTP deve responder 201 e retornar evento com identificador e título enviado.

## Contrato REST proposto
- `POST /eventos`.
- JSON com `titulo`, `descricao`, `dataInicio`, `dataFim`, `espacoFisicoId`.
- Resposta 201 com `id` e `titulo`.

O caminho e formato de resposta são propostas pendentes de validação da equipe.

## Nível
Integração HTTP com NestJS e banco SQLite temporário. Teste: `test/evento-endpoint-red.test.ts`.

## Limite da evidência
404 no endpoint; status 201 e conteúdo de resposta ainda não foram exercitados.

# 04-04 — Especificação do Teste RED

## Cenário
Enviar payload vazio para criação e esperar HTTP 400, conforme o critério de rejeitar dados incompletos da issue #30.

## Contrato proposto
- `POST /eventos`
- Corpo `{}` (campos obrigatórios ausentes).
- Resposta esperada: 400.
- Rota e contrato são propostas REST pendentes de validação pela equipe.

## Nível
Integração HTTP com Nest e SQLite temporário. Arquivo: `test/evento-dto-red.test.ts`.

O teste compilou, mas recebeu 404 (rota ausente) antes de alcançar a validação. Assim, a falha atual é uma precondição de endpoint; não prova o comportamento do DTO.

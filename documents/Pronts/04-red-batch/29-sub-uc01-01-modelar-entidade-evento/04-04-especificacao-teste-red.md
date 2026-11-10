# 04-04 — Especificação do Teste RED

## Critério
Após criar um evento válido, a resposta deve indicar o estado inicial `RASCUNHO`.

## Contrato REST proposto para permitir o teste
- Método/rota: `POST /eventos`
- Payload: `titulo`, `descricao`, `dataInicio`, `dataFim`, `espacoFisicoId`.
- Sucesso esperado: HTTP 201 e resposta JSON com `status: "RASCUNHO"`.
- Esta rota e a forma do corpo são propostas para revisão; não estavam especificadas na issue.

## Nível
Integração HTTP com a aplicação Nest e SQLite temporário. A abordagem evita depender de uma entidade ainda inexistente, mas não isola a camada de domínio.

## Arquivo
`test/evento-entity-red.test.ts`. O teste envia dados válidos, exige 201 e então verifica `RASCUNHO`. O build passa; a execução para na primeira asserção porque o endpoint ainda responde 404. Portanto, a asserção de estado permanece pendente de implementação e não foi falsificada.

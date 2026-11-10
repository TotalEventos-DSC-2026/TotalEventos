# Fase RED — Issue #29

## Issue
- [SUB-UC01-01] Modelar entidade Evento
- https://github.com/TotalEventos-DSC-2026/TotalEventos/issues/29
- Responsável: `ManuMadeira`

## Teste e resultado
- Teste: `test/evento-entity-red.test.ts`
- Cenário: criar um evento válido e confirmar estado inicial `RASCUNHO`.
- Execução: build TypeScript bem-sucedido; teste recebeu HTTP 404 em vez do 201 esperado porque `POST /eventos` ainda não existe.
- A asserção de estado não foi alcançada; a falha expõe a dependência ausente, não valida isoladamente o modelo de domínio.

## Rastreabilidade
- Branch: `feature/29-sub-uc01-01-modelar-entidade-evento-red`
- Commit do teste: `a1c81a2`
- Draft PR: https://github.com/TotalEventos-DSC-2026/TotalEventos/pull/89
- GitHub Project: `In Progress`

## Limite da etapa
Somente o teste foi adicionado. A rota e o corpo de resposta são propostas REST pendentes de validação da equipe. Sem implementação de produção, merge ou encerramento da issue.

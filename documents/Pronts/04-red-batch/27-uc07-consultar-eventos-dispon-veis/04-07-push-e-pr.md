## Push e Draft PR

- Branch: $branch.
- Push do commit RED:
``text
To https://github.com/TotalEventos-DSC-2026/TotalEventos.git
   dffbfb5..f5f4f94  feature/27-uc07-consultar-eventos-dispon-veis-red -> feature/27-uc07-consultar-eventos-dispon-veis-red
``n- PR existente #91: https://github.com/TotalEventos-DSC-2026/TotalEventos/pull/91 (confirmado aberto e Draft).
- Corpo proposto/atualizado:

## Draft PR — [UC07] Consultar Eventos Disponíveis

### Issue
#27 — https://github.com/TotalEventos-DSC-2026/TotalEventos/issues/27

### Objetivo
Registrar RED para a listagem pública de eventos, sem alterações de produção.

### Contrato REST proposto (pendente de revisão da equipe)
- `GET /eventos/publicos` retorna `200` e uma lista JSON de eventos visíveis.
- `GET /eventos/disponiveis` retorna `200`; filtros opcionais: `data`, `sala`, `eventoId`.
- `GET /eventos/:id` retorna `200` para evento existente.
- Criação proposta: `POST /eventos` com `{titulo, descricao, dataInicio, dataFim, espacoFisicoId}` retorna `201`.

### RED
`test/uc07-public-query-red.test.ts`: espera `200` em `GET /eventos/publicos`; a execução atual recebeu `404`, falhando na rota ainda ausente. `npm run build` concluiu; teste específico executado com `node --test dist/test/uc07-public-query-red.test.js`.

### Estado
In Progress. RED commit: `f5f4f9429fc442925ace5ac4d25adf8551317dd7`. Revisão pendente; PR permanece Draft. Sem GREEN, merge ou fechamento da issue.

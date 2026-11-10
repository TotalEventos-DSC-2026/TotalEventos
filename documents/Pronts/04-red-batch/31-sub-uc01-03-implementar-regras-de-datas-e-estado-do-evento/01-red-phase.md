# Fase RED — Issue #31

- Issue: [SUB-UC01-03] Implementar regras de datas e estado do evento
- Responsável: `ManuMadeira`
- Critério: rejeitar data final anterior à data inicial.
- Teste: `test/evento-datas-red.test.ts`.
- Resultado: build passou; resposta `404` em vez de `400`, pois `POST /eventos` não existe. A regra temporal não foi alcançada.
- Branch: `feature/31-sub-uc01-03-implementar-regras-de-datas-e-estado-do-evento-red`.
- Commit: `c08288c`; Draft PR #87: https://github.com/TotalEventos-DSC-2026/TotalEventos/pull/87.
- Estado do board: In Progress. Sem produção, merge ou fechamento.

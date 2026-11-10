# RED Phase — Issue #58

- Issue: https://github.com/TotalEventos-DSC-2026/TotalEventos/issues/58
- Branch: feature/58-sub-uc08-04-endpoint-e-testes-red; PR #60: https://github.com/TotalEventos-DSC-2026/TotalEventos/pull/60 (OPEN/Draft).
- Criterion: Endpoint processa pagamento e cobre resposta coerente para sucesso e falha.
- Test: test/uc08-payment-red.test.ts; build succeeded; test skipped/blocked (not a RED failure).
- Reason: Blocked: the endpoint flow needs a gateway fixture contract and inscription setup; neither may be fabricated or sent to a real gateway.
- Test commit: 02872eaa9fb4b3daeef4c90f7f372553a5cce4e7; push confirmed.
- Status In Progress; review pending; no production changes/GREEN/merge/closure.
- Proposed contract pending review: 04-04-contrato-api-proposto.md.

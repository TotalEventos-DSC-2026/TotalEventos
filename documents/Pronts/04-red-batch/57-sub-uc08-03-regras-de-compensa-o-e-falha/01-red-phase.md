# RED Phase — Issue #57

- Issue: https://github.com/TotalEventos-DSC-2026/TotalEventos/issues/57
- Branch: feature/57-sub-uc08-03-regras-de-compensa-o-e-falha-red; PR #61: https://github.com/TotalEventos-DSC-2026/TotalEventos/pull/61 (OPEN/Draft).
- Criterion: Falha/recusa nao pode confirmar a inscricao; compensacao deve ser rastreavel e liberar reserva indevida.
- Test: test/uc08-payment-red.test.ts; build succeeded; test skipped/blocked (not a RED failure).
- Reason: Blocked: a deterministic decline/failure and compensation contract requires an approved gateway test double.
- Test commit: 6d36cf0d7083dabaad00dafadf5246e10ccab235; push confirmed.
- Status In Progress; review pending; no production changes/GREEN/merge/closure.
- Proposed contract pending review: 04-04-contrato-api-proposto.md.

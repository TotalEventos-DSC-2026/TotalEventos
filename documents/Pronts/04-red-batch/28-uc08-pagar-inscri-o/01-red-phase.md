# RED Phase — Issue #28

- Issue: https://github.com/TotalEventos-DSC-2026/TotalEventos/issues/28
- Branch: `feature/28-uc08-pagar-inscri-o-red`
- Existing PR #90: https://github.com/TotalEventos-DSC-2026/TotalEventos/pull/90 (OPEN/Draft).
- Selected behavior: confirm a paid inscription only after payment approval.
- Test file: `test/uc08-payment-red.test.ts`; build succeeded; focused test is skipped/blocked, not a RED failure.
- User decision: a fake gateway may be used only inside tests, with an explicit configured response for each scenario. This is a proposed test contract pending team validation.
- Blocker: `AppModule` has no payment endpoint or gateway provider to inject the local fake into. No gateway was called and no payment outcome was fabricated.
- Evidence commit: `440737ec292e0a0f2fd6592d26a52d937a498b18`, pushed; PR #90 description updated.
- Status In Progress; review pending; no production changes/GREEN/merge/closure.
- Proposed contract pending team review: `04-04-contrato-api-proposto.md`.

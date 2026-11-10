## Test push and Draft PR

Branch: feature/28-uc08-pagar-inscri-o-red.

Exact push output:
```text
To https://github.com/TotalEventos-DSC-2026/TotalEventos.git
   7b76a62..5a9a389  feature/28-uc08-pagar-inscri-o-red -> feature/28-uc08-pagar-inscri-o-red
```

Existing PR #90: https://github.com/TotalEventos-DSC-2026/TotalEventos/pull/90 (OPEN/Draft; verified).

Exact PR body:

## Draft PR — [UC08] Pagar Inscrição

### Issue
#28 — https://github.com/TotalEventos-DSC-2026/TotalEventos/issues/28

### Proposed REST/payment contract — pending team review
POST /inscricoes/:id/pagamentos, with no client-controlled outcome field. Approved gateway outcome -> 201; declined outcome -> 402. Proposed statuses: PENDENTE, APROVADO, RECUSADO, FALHA.

### Blocked, not RED
Blocked: no payment-gateway abstraction or approved deterministic test-double contract. Never accept payment outcome from request input.

TypeScript build succeeded. The node:test scenario is explicitly skipped; no payment result was fabricated or sent to a real gateway.

Exact test output:
```text
﹣ UC08 payment outcome cannot be tested until a safe gateway simulator contract is approved (302.8985ms) # Blocked: no gateway abstraction or approved test-double contract; never accept outcome from request input.
ℹ tests 1
ℹ suites 0
ℹ pass 0
ℹ fail 0
ℹ cancelled 0
ℹ skipped 1
ℹ todo 0
ℹ duration_ms 1231.0605
```

### Status
In Progress. Test commit: 5a9a389e5b3f36f2aed42dcd01d547de2c2e70af. Review pending; PR remains Draft. No production changes, GREEN, merge, or issue closure.
## Execução do build e teste

- `npm run build`: passou.
- `node --test dist/test/uc08-payment-red.test.js`: exit code 0; um cenário skipped/blocked, sem asserção RED.
- Nenhum request de pagamento foi enviado; não houve resultado simulado nem chamada a gateway real.

Saída exata do test runner:

```text
﹣ UC08 explicit local decline or failure keeps inscription and capacity consistent (713.2083ms) # Blocked: AppModule has no payment endpoint or gateway provider to inject a test-only fake into. A decline/failure response must be configured explicitly per scenario, never supplied by a request or sent to a live gateway.
ℹ tests 1
ℹ suites 0
ℹ pass 0
ℹ fail 0
ℹ cancelled 0
ℹ skipped 1
ℹ todo 0
ℹ duration_ms 2950.7534
```

O build valida TypeScript; a execução não atingiu comportamento de falha/compensação por falta de seam.

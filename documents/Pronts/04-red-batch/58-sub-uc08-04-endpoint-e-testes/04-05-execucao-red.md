## Execução do build e teste

- `npm run build`: passou.
- `node --test dist/test/uc08-payment-red.test.js`: exit code 0; um cenário skipped/blocked, sem asserção RED.
- Nenhum request de pagamento foi enviado; não houve resultado simulado nem chamada a gateway real.

Saída exata do test runner:

```text
﹣ UC08 payment endpoint returns results for explicitly configured local gateway scenarios (665.0875ms) # Blocked: AppModule has no payment endpoint or gateway provider to inject a test-only fake into. Approval/decline responses and inscription setup cannot be exercised without changing production; no result may be supplied by a request or sent to a live gateway.
ℹ tests 1
ℹ suites 0
ℹ pass 0
ℹ fail 0
ℹ cancelled 0
ℹ skipped 1
ℹ todo 0
ℹ duration_ms 2585.7241
```

O build valida TypeScript; a execução não alcançou o endpoint nem os cenários de pagamento, pois o seam/fixture não existe.

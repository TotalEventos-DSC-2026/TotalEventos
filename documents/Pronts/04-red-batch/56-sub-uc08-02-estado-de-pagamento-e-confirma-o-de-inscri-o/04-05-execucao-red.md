## Execução do build e teste

- `npm run build`: passou.
- `node --test dist/test/uc08-payment-red.test.js`: exit code 0; um cenário skipped/blocked, sem asserção RED.
- Nenhum request de pagamento foi enviado; não houve resultado simulado nem chamada a gateway real.

Saída exata do test runner:

```text
﹣ UC08 confirms a pending inscription only after an explicitly configured local approval (791.7638ms) # Blocked: AppModule has no payment endpoint or gateway provider to inject a test-only fake into. A fake approval must be configured explicitly per scenario, never supplied by a request or sent to a live gateway.
ℹ tests 1
ℹ suites 0
ℹ pass 0
ℹ fail 0
ℹ cancelled 0
ℹ skipped 1
ℹ todo 0
ℹ duration_ms 2783.1801
```

O build valida TypeScript; a execução não atingiu a transição de inscrição porque falta seam de pagamento no sistema.

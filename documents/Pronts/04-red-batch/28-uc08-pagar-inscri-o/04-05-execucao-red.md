## Execução do build e teste

- `npm run build`: passou.
- `node --test dist/test/uc08-payment-red.test.js`: exit code 0; um cenário skipped/blocked. Isso não é uma falha de asserção RED.
- Nenhum request de pagamento foi enviado; nenhum gateway real foi chamado; nenhum resultado de pagamento foi produzido.

Saída exata do test runner:

```text
﹣ UC08 confirms a paid inscription only after the configured local test gateway approves (648.6767ms) # Blocked: AppModule has no payment endpoint or gateway provider to inject a test-only fake into. A fake response must be configured explicitly per scenario, never supplied by a request or sent to a live gateway.
ℹ tests 1
ℹ suites 0
ℹ pass 0
ℹ fail 0
ℹ cancelled 0
ℹ skipped 1
ℹ todo 0
ℹ duration_ms 2972.4022
```

O build valida TypeScript; a execução não alcançou comportamento de pagamento porque o seam de produção não existe.

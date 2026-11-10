# 04-05 — Evidencias do TDD RED

Comandos executados:

```powershell
npm run build
node --test dist/test/uc04-46-endpoint-cancelamento-red.test.js
```

Resultado: build TypeScript passou. Teste RED: HTTP 404 em vez de 200/204; o status persistido nao foi verificado.

Limite: A rota proposta retorna 404; a assercao sobre inscricao persistida nao foi alcancada. O resultado nao comprova a regra de dominio que nao foi alcancada.
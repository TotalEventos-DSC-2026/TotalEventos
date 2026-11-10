# 04-05 — Evidencias do TDD RED

Comandos executados:

```powershell
npm run build
node --test dist/test/uc06-47-estado-cancelamento-red.test.js
```

Resultado: build TypeScript passou. Teste RED: HTTP 404 em vez de 200/204; o estado do evento nao foi observado.

Limite: Nao ha modulo/agregado de eventos no AppModule; rota ausente retorna 404. O resultado nao comprova a regra de dominio que nao foi alcancada.
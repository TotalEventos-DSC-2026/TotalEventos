# 04-05 — Evidencias do TDD RED

Comandos executados:

```powershell
npm run build
node --test dist/test/uc06-48-participantes-cancelamento-red.test.js
```

Resultado: build TypeScript passou. Teste RED: HTTP 404 em vez de 200/204; nenhum participante ou notificacao foi exercitado.

Limite: A rota proposta retorna 404. Nao ha fluxo evento-participantes nem limite de notificacao definido para exercitar. O resultado nao comprova a regra de dominio que nao foi alcancada.
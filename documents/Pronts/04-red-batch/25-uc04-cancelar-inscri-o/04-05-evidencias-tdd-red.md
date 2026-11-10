# 04-05 — Evidencias do TDD RED

Comandos executados:

```powershell
npm run build
node --test dist/test/uc04-cancelar-inscricao-red.test.js
```

Resultado: build TypeScript passou. O teste RED falhou na primeira assercao funcional: a rota proposta respondeu 404, quando o teste esperava status 200/204.

O 404 evidencia que o endpoint/prerequisito esta ausente. As assercoes de persistencia `CANCELADA` e ocupacao zero nao foram executadas; nao e evidencia de que essas regras falham ou passam.
# 04-05 — Evidencias do TDD RED

Comandos executados:

```powershell
npm run build
node --test dist/test/uc06-cancelar-evento-red.test.js
```

Resultado: build TypeScript passou. O teste falhou porque `POST /eventos/evento-uc06-26/cancelar` retornou 404 em vez de um dos status propostos (200/204).

O 404 e evidencia somente de rota/prerequisito ausente. Nao e evidencia de que o evento foi cancelado, que participantes foram tratados ou que o estado ficou consistente.
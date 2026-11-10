# 04-05 — Evidencias do TDD RED

Comandos executados:

```powershell
npm run build
node --test dist/test/uc04-43-estado-cancelamento-red.test.js
```

Resultado: build TypeScript passou. O teste falhou com `undefined` em vez de `function` ao verificar a operacao `Inscricao.cancelar`.

Isso demonstra a ausencia do seam/operacao atual, nao prova o resultado funcional da regra. A entidade declara o enum CANCELADA, mas nao possui operacao de cancelamento; a transicao e data nao foram exercitadas.
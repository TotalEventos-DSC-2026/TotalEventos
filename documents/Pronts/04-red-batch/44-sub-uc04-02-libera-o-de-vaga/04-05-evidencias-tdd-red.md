# 04-05 — Evidencias do TDD RED

Comandos executados:

```powershell
npm run build
node --test dist/test/uc04-44-liberacao-vaga-red.test.js
```

Resultado: build TypeScript passou. O teste falhou com `undefined` em vez de `function` ao verificar a operacao `SessaoPalestra.liberarVaga`.

Isso demonstra a ausencia do seam/operacao atual, nao prova o resultado funcional da regra. A entidade so expoe incremento de check-in; nao existe liberacao de vaga. A assercao de ocupacao e disponibilidade nao foi alcancada.
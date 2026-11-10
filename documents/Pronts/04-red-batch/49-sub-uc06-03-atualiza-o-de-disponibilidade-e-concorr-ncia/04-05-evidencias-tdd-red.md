# 04-05 — Evidencias do TDD RED

Comandos executados:

```powershell
npm run build
node --test dist/test/uc06-49-disponibilidade-concorrencia-red.test.js
```

Resultado: build TypeScript passou. Teste RED: undefined em vez de function para a operacao de liberacao; a assercao concorrente nao foi alcancada.

Limite: SessaoPalestra nao expoe liberacao de vaga; a concorrencia/ocupacao nao foi exercitada. O resultado nao comprova a regra de dominio que nao foi alcancada.
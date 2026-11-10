# 04-05 — Evidencias do TDD RED

Comandos executados:

```powershell
npm run build
node --test dist/test/uc04-45-persistencia-auditoria-red.test.js
```

Resultado: build TypeScript passou. O teste falhou com `undefined` em vez de `function` ao verificar a operacao `InscricoesService.cancelarInscricao`.

Isso demonstra a ausencia do seam/operacao atual, nao prova o resultado funcional da regra. O servico nao expoe cancelamento. Nao ha modelo/esquema de auditoria definido no repositorio; o teste cobre apenas persistencia/status/updatedAt se a operacao existir.
# 04-07 — Draft Pull Request

- PR #87: https://github.com/TotalEventos-DSC-2026/TotalEventos/pull/87
- Origem: `feature/31-sub-uc01-03-implementar-regras-de-datas-e-estado-do-evento-red`
- Destino: `main`; estado aberto como Draft, sem merge.

Descrição publicada:

```markdown
## Draft Pull Request — [SUB-UC01-03] Implementar regras de datas e estado do evento

### Issue vinculada
Ref: #31 — https://github.com/TotalEventos-DSC-2026/TotalEventos/issues/31

### Critério RED
Uma data final anterior à data inicial deve ser rejeitada com HTTP 400.

### Alterações incluídas
- `test/evento-datas-red.test.ts`: envia evento com intervalo temporal inconsistente.
- Nenhum código de produção foi alterado.

### Evidência
Build TypeScript concluído. A execução recebeu `404 !== 400`: `POST /eventos` não está registrado. A regra temporal não foi executada; o RED atual evidencia a precondição de endpoint ausente.

### Estado e próximos passos
- [x] Teste compilado, executado e falhando na rota ausente
- [x] Commit publicado na branch `feature/31-sub-uc01-03-implementar-regras-de-datas-e-estado-do-evento-red`
- [ ] Revisão por par
- [ ] Implementar rota/regra e reexecutar para chegar à validação de datas
- [ ] Refatoração (Material 06)

⚠️ Draft: não fazer merge nem encerrar a issue. Contrato REST proposto pendente de validação da equipe.
```

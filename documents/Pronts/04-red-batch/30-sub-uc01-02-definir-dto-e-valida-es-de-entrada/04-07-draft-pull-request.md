# 04-07 — Draft Pull Request

- PR #88: https://github.com/TotalEventos-DSC-2026/TotalEventos/pull/88
- Título: `[RED] [SUB-UC01-02] Definir DTO e validações de entrada`
- Origem: `feature/30-sub-uc01-02-definir-dto-e-valida-es-de-entrada-red`; destino `main`.
- Estado: aberto como Draft, sem merge.

Descrição publicada:

```markdown
## Draft Pull Request — [SUB-UC01-02] Definir DTO e validações de entrada

### Issue vinculada
Ref: #30 — https://github.com/TotalEventos-DSC-2026/TotalEventos/issues/30

### Critério RED
Uma requisição de criação sem os campos obrigatórios deve ser rejeitada com HTTP 400.

### Alterações incluídas
- `test/evento-dto-red.test.ts`: teste HTTP com payload vazio.
- Nenhum código de produção foi alterado.

### Evidência
Build TypeScript concluído. A execução recebeu `404 !== 400`, pois `POST /eventos` ainda não está registrado. A validação do DTO não foi alcançada; esta é uma falha de precondição de endpoint, não evidência da regra de validação.

### Estado e próximos passos
- [x] Teste compilado, executado e falhando na rota ausente
- [x] Commit publicado na branch `feature/30-sub-uc01-02-definir-dto-e-valida-es-de-entrada-red`
- [ ] Revisão por par
- [ ] Implementar DTO/endpoint e reexecutar para chegar à validação HTTP 400
- [ ] Refatoração (Material 06)

⚠️ Draft: não fazer merge nem encerrar a issue antes de GREEN/REFACTOR. `POST /eventos` e o contrato são propostas pendentes de validação da equipe.
```

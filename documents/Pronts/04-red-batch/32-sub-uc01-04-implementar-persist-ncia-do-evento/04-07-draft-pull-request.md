# 04-07 — Draft Pull Request

- PR #86: https://github.com/TotalEventos-DSC-2026/TotalEventos/pull/86
- Origem: `feature/32-sub-uc01-04-implementar-persist-ncia-do-evento-red`; destino `main`.
- Estado: aberto como Draft, sem merge.

Descrição publicada:

```markdown
## Draft Pull Request — [SUB-UC01-04] Implementar persistência do evento

### Issue vinculada
Ref: #32 — https://github.com/TotalEventos-DSC-2026/TotalEventos/issues/32

### Critério RED
Evento criado deve ser recuperável pela consulta, preservando seus dados.

### Alterações incluídas
- `test/evento-persistencia-red.test.ts`: cria evento por HTTP e consulta pelo identificador.
- Nenhum código de produção foi alterado.

### Evidência
Build TypeScript concluído. A execução recebeu `404 !== 201` na requisição inicial `POST /eventos`; a consulta de persistência não foi alcançada. A falha atual é a dependência de criação/endpoint ausente.

### Estado e próximos passos
- [x] Teste compilado, executado e falhando na precondição de criação
- [x] Commit publicado na branch `feature/32-sub-uc01-04-implementar-persist-ncia-do-evento-red`
- [ ] Revisão por par
- [ ] Implementar criação/repositório e reexecutar para chegar à consulta persistida
- [ ] Refatoração (Material 06)

⚠️ Draft: não fazer merge nem encerrar a issue. `POST /eventos`, consulta e resposta são contratos REST propostos para validação.
```

# 04-07 — Draft Pull Request

- PR #89: https://github.com/TotalEventos-DSC-2026/TotalEventos/pull/89
- Título: `[RED] [SUB-UC01-01] Modelar entidade Evento`
- Origem: `feature/29-sub-uc01-01-modelar-entidade-evento-red`
- Destino: `main`
- Estado: aberto como Draft, sem merge.

Descrição atualizada:

```markdown
## Draft Pull Request — [SUB-UC01-01] Modelar entidade Evento

### Issue vinculada
Ref: #29 — https://github.com/TotalEventos-DSC-2026/TotalEventos/issues/29

### Critério RED
Uma criação válida deve responder HTTP 201 e produzir um evento com estado inicial `RASCUNHO`.

### Alterações incluídas
- `test/evento-entity-red.test.ts`: teste de integração Nest/HTTP que cria evento válido e verifica o estado inicial.
- Nenhum código de produção foi alterado.

### Evidência
Build TypeScript concluído. A execução do teste recebeu `404 !== 201`: a aplicação ainda não registra `POST /eventos`. A asserção de estado `RASCUNHO` não é alcançada; portanto, esta falha demonstra o bloqueio no endpoint de criação, ainda não a implementação isolada da entidade.

### Estado e próximos passos
- [x] Teste compilado, executado e falhando na rota ausente (RED/precondição)
- [x] Commit publicado na branch `feature/29-sub-uc01-01-modelar-entidade-evento-red`
- [ ] Revisão por par
- [ ] Implementação GREEN da entidade e endpoint
- [ ] Reexecutar para alcançar a asserção do estado inicial
- [ ] Refatoração (Material 06)

⚠️ Draft: não fazer merge nem encerrar a issue antes de completar GREEN/REFACTOR. A rota e o contrato de resposta usados pelo teste são propostas REST pendentes de validação da equipe.
```

# 05-07 — Versionamento e Pull Request

## Commit de implementação

- Hash: `f16165a19bbef7ce6948b4664c4a63bdd34c787b`.
- Mensagem: `feat(eventos): implement UC01 creation flow (refs #29-#33)`.
- Arquivos: nove de produção — módulo/controller/DTO/entidade/serviço/repositório e wiring/schema SQLite.
- Diff: 274 inserções e 1 remoção.
- Testes #29–32 foram cherry-picked de suas branches publicadas para validar a sequência conjunta; suas asserções não foram alteradas.

## Push observado

```text
To https://github.com/TotalEventos-DSC-2026/TotalEventos.git
   06d19d0..f16165a  HEAD -> feature/33-sub-uc01-05-expor-endpoint-de-cria-o-e-testes-red
```

O push foi fast-forward, sem force. A branch remota mantém upstream no PR já existente.

## Commit dos artefatos Material 05

- Hash: `3cdb7ff51337c5dac457b3c3f649c5c2c8a79f6d`.
- Mensagem: `docs(tdd): record GREEN evidence for UC01 issues 29-33`.
- Oito arquivos Markdown; 361 inserções.
- Push observado:

```text
To https://github.com/TotalEventos-DSC-2026/TotalEventos.git
   f16165a..3cdb7ff  HEAD -> feature/33-sub-uc01-05-expor-endpoint-de-cria-o-e-testes-red
```

## Draft PR

- PR #85: https://github.com/TotalEventos-DSC-2026/TotalEventos/pull/85
- Branch remota: `feature/33-sub-uc01-05-expor-endpoint-de-cria-o-e-testes-red`.
- Base: `main`.
- Estado: Draft; não fazer merge.
- PRs #89–86 permanecem separados; somente o PR #85 foi atualizado nesta etapa.

Descrição atualizada:

```markdown
## Material 05 GREEN — UC01 (#29–33)

### Issues relacionadas
Refs: #29, #30, #31, #32 e #33 — fluxo UC01 de criação de evento.

### Implementação
- Entidade de evento com estado inicial `RASCUNHO` e regras temporais.
- DTO de entrada valida campos obrigatórios, datas ISO e UUID v4.
- Serviço de aplicação gera UUID, cria evento e delega persistência.
- Repositório SQLite persiste e recupera eventos.
- Controller expõe `POST /eventos` e `GET /eventos/:id`.
- Nenhuma dependência foi instalada e nenhum teste/asserção foi afrouxado.

### Evidências
- Build TypeScript: passou.
- Os cinco testes RED UC01: 5 passed, 0 failed, 0 skipped.
- Suíte completa (`npm test`): 23 passed, 0 failed, 0 skipped.
- O baseline anterior falhava nos cinco testes com 404 porque a rota de eventos não existia.

### Contratos e validação pendente
Os caminhos HTTP, nomes de campo e respostas foram propostos no Material 04; precisam de confirmação da equipe. A tabela SQLite não valida a existência do espaço físico, pois não há agregado/repositório correspondente nesta branch.

### Estado e próximos passos
- [x] Implementação mínima e testes RED→GREEN publicados
- [x] PR existente atualizado com escopo e evidências
- [ ] Revisão por par
- [ ] Validar os contratos REST com a equipe
- [ ] Refatoração (Material 06)

⚠️ Draft: não fazer merge nem encerrar issues nesta etapa.
```

## GitHub Project

Verificação final: issues #29–33 permanecem abertas e em `In Progress` no projeto `Planejamento - TotalEventos`. Nenhuma issue foi fechada e nenhum merge foi realizado.

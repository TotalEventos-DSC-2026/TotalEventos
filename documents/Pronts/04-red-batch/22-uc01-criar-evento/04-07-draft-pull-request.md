# 04-07 — Draft Pull Request

## Pull Request existente, atualizado
- Número: #96
- URL: https://github.com/TotalEventos-DSC-2026/TotalEventos/pull/96
- Título: `[RED] [UC01] Criar Evento`
- Branch de origem: `feature/22-uc01-criar-evento-red`
- Branch de destino: `main`
- Estado verificado: aberto, Draft; sem merge.
- Issue vinculada na descrição: #22.

## Descrição publicada

````markdown
## Draft Pull Request — [UC01] Criar Evento

### Issue vinculada
Ref: #22 — https://github.com/TotalEventos-DSC-2026/TotalEventos/issues/22

### Objetivo
Registrar um teste de integração TDD RED para o critério de criação de evento válido, verificando a resposta HTTP 201 planejada para `POST /eventos`.

### Alterações incluídas
- `test/eventos.test.ts`: envia um payload válido para `POST /eventos` e exige status 201.
- O teste usa a aplicação Nest e um SQLite temporário; nenhum código de produção foi alterado.

### Evidência RED
Comando: `npm run build; if ($LASTEXITCODE -eq 0) { node --test dist/test/eventos.test.js }`

```text
✖ POST /eventos aceita evento válido e responde com status 201 (1338.0329ms)
AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:

404 !== 201

ℹ tests 1
ℹ suites 0
ℹ pass 0
ℹ fail 1
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
```

O servidor iniciou e respondeu 404 porque a rota de criação ainda não existe; o teste compilou e executou, portanto a falha é funcional. O build independente também terminou com código 0.

### Estado e próximos passos
- [x] Branch existente vinculada à issue: `feature/22-uc01-criar-evento-red`
- [x] Teste automatizado executado e falhando por ausência do endpoint (RED)
- [x] Commit rastreável publicado
- [ ] Revisão por par
- [ ] Implementação de produção (GREEN — Material 05)
- [ ] Refatoração (Material 06)

⚠️ Este PR permanece em Draft. Não fazer merge nem encerrar a issue antes das etapas GREEN e REFACTOR.
````

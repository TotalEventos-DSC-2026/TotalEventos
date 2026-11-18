# Roteiro de conclusão — UC01: consultar grade e registrar check-ins

## 1. Visão geral

### 1.1 Dimensão técnica e didática

O caso real é a Epic `#14`, denominada **[UC01] Consultar grade de sessões e registrar check-ins de eventos**.

| Entrega / critério | Evidência real verificada | Situação |
|---|---|---|
| SUB-01 — entidade e estados de ingresso | `src/modules/acessos/entities/ingresso.entity.ts`; testes de estado em `test/check-in.test.ts` | Concluído |
| SUB-02 — lotação e capacidade | `src/modules/lotacao/entities/sessao-palestra.entity.ts`; testes de lotação | Concluído |
| SUB-03 — persistência SQLite e repositórios | `src/database/sqlite-database.ts` e repositórios SQLite dos módulos | Concluído localmente |
| SUB-03 — persistência PostgreSQL adicional | TypeORM, entidades ORM, mappers, migration e repositórios PostgreSQL | Concluído localmente |
| SUB-04 — consulta da grade | `src/modules/grade-sessoes/grade-sessoes.controller.ts` | Concluído em SQLite; PostgreSQL ainda não integrado |
| SUB-05 — check-in por QR | Endpoint `POST /acessos/check-in`, service e repositório | Concluído |
| SUB-06 — check-in de inscrição confirmada | Endpoint `POST /inscricoes/:id/check-in`, service e repositório | Concluído |
| SUB-07 — testes automatizados | `npm test` executado: 23 testes passaram | Concluído |
| HTTP — status 201/400/404/409 | Evidência dos testes locais e requisições Docker | Concluído |
| Containerização — Docker/Compose | Dockerfile, `.dockerignore`, `compose.yaml`; build aprovado | Concluído |
| Migrations | Migration aplicada no PostgreSQL; tabelas verificadas | Concluído |
| Durabilidade | Dados permaneceram após reinício somente da API | Concluído |
| Auditoria 12 — cenário adotado | Cenário B: preservar arquitetura, com correções evidenciadas | Concluído |

O caso **não está formalmente concluído** no GitHub:

- Epic `#14` está aberta.
- Sub-Issues `#15` a `#21` estão abertas.
- Não foi encontrada uma cadeia de PRs empilhados correspondente às implementações da Epic.
- Os PRs existentes listados pela API apontam para vários casos/branches adicionais e todos têm base `main`; não há evidência de um PR `uc01`/SUB-01 a SUB-07 já integrado.
- Não há aprovação humana registrada nesta sessão.
- A grade de sessões não foi migrada para PostgreSQL no modo real; ela usa repositório em memória nesse modo.

### 1.2 Dimensão de governança no GitHub

A Epic não deve ser fechada automaticamente. Antes do fechamento formal são necessários:

1. revisão humana das alterações;
2. versão do código em uma branch e Pull Request rastreável;
3. integração de todos os PRs relevantes na `main`;
4. execução final dos scripts reais;
5. fechamento das Sub-Issues com evidência;
6. atualização da Epic e do GitHub Project.

## 2. Mapa atual da cadeia de Pull Requests

Dados verificados pela API pública:

- Repositório: `TotalEventos-DSC-2026/TotalEventos`
- Branch padrão/local atual: `main`
- Epic: `#14`
- Sub-Issues: `#15`, `#16`, `#17`, `#18`, `#19`, `#20`, `#21`
- A API retornou 38 PRs abertos, todos em modo Draft e com base `main`.
- Nenhum PR aberto representa diretamente uma cadeia final para `#15`–`#21`.
- Não há cadeia empilhada verificável no formato `main <- PR A <- PR B <- PR C` para esta Epic.

Portanto, o roteiro atual é de PR único ou PRs independentes com base `main`, não de merge de cadeia empilhada.

## 3. Passo a passo operacional

> [!IMPORTANT]
> Não execute merge ou fechamento enquanto houver alterações sem revisão. A CLI `gh` não está disponível neste ambiente; os comandos abaixo são para uso em máquina onde a CLI estiver instalada e autenticada. Também é fornecido o caminho pela interface Web.

### Passo 1 — Publicar o parecer arquitetural e preparar o diff

**O que fazer:** registrar o resultado do Material 12 e, se necessário, publicar os artefatos no GitHub.

CLI:

```powershell
cd "D:\Faculdade\Faculdade - UTFPR\Ciencia da computacao\6 periodo\Desenvolvimento De Sistemas Corporativos\Corporativos\outra\TotalEventos"
git --no-pager status --short
git --no-pager diff --stat
git add package.json package-lock.json Dockerfile compose.yaml .dockerignore .env.example .npmrc src documents/Pronts/atividades-09-a-12
git diff --cached --stat
git diff --cached --check
git commit -m "feat(uc01): integrar persistencia PostgreSQL e containerizacao (refs #14)"
git push -u origin main
```

Não faça `git push origin main` se a equipe exigir PR. Uma alternativa segura é criar uma branch:

```powershell
git switch -c feature/uc01-concluir-arquitetura
git push -u origin feature/uc01-concluir-arquitetura
gh pr create --draft --base main --head feature/uc01-concluir-arquitetura --title "[UC01] Concluir persistência, Docker e contrato HTTP" --body-file documents/Pronts/atividades-09-a-12/12/12-08-decisoes-arquiteturais-checklist.md
```

Interface Web:

1. Abra o repositório no GitHub.
2. Crie a branch ou confira o branch já publicado.
3. Abra um PR para `main`.
4. Cole o parecer de `12/12-08-decisoes-arquiteturais-checklist.md` na descrição ou comentário.

Se já existir um PR de implementação, poste o parecer nele:

```powershell
gh pr comment <N> --body-file documents/Pronts/atividades-09-a-12/12/12-08-decisoes-arquiteturais-checklist.md
```

### Passo 2 — Retirar o PR do modo Draft

Somente após o conteúdo estar completo e revisável:

```powershell
gh pr ready <N>
```

Interface Web:

1. Abra o PR.
2. Clique em **Ready for review**.

Não aproxime nem faça merge nesta etapa.

### Passo 3 — Realizar revisão técnica humana

Revise:

- alterações em `package.json` e `package-lock.json`;
- Dockerfile e Compose;
- `.env.example` sem segredo real;
- ausência de senha, token ou certificado;
- entidades, mappers e repositórios;
- migration;
- contratos HTTP;
- tratamento de duplicidade e lotação;
- a situação explícita de a grade continuar em memória no modo PostgreSQL.

CLI:

```powershell
gh pr view <N> --web
gh pr diff <N>
```

Interface Web:

1. Abra a aba **Files changed**.
2. Confirme que nenhum `.env` real ou segredo foi incluído.
3. Use **Review changes** → **Approve** ou solicite alterações.
4. A aprovação deve ser feita por pessoa diferente do autor quando o repositório exigir.

GitHub não permite autoaprovação em projetos configurados com esse controle.

### Passo 4 — Integrar na branch principal

Como não existe uma cadeia empilhada comprovada para esta Epic, não é necessário redirecionar bases encadeadas.

Para um único PR independente:

```powershell
gh pr merge <N> --merge
git switch main
git pull --ff-only origin main
```

Na interface Web:

1. Confirme que todos os checks passaram.
2. Clique em **Merge pull request**.
3. Clique em **Confirm merge**.
4. Atualize o branch local com `git pull --ff-only origin main`.

> [!WARNING]
> Não use `--delete-branch` durante uma cadeia empilhada antes de redirecionar o PR dependente para `main`. Apagar a branch base pode fechar o PR seguinte automaticamente.

Se existirem PRs encadeados reais no futuro, use:

```powershell
gh pr merge <PR-base> --merge
gh pr edit <PR-dependente> --base main
git switch main
git pull --ff-only origin main
```

Repita a integração seguindo estritamente a ordem das bases.

Validação final na `main`:

```powershell
npm run build
npm test
docker compose config
docker compose up --build -d
curl.exe -i http://localhost:3000/health
docker compose ps
docker compose down
```

Não use `docker compose down -v`, pois removeria os volumes PostgreSQL.

Scripts reais disponíveis no `package.json`:

- `npm run build`
- `npm test`
- `npm start`
- `npm run dev`

Scripts TypeORM disponíveis:

- `npm run migration:show`
- `npm run migration:run`

### Passo 5 — Fechar Sub-Issues e atualizar o Project

Somente após o código estar integrado e validado:

| Issue | Entrega | Referência |
|---|---|---|
| `#15` | Entidade e estados de ingresso | `src/modules/acessos/entities/ingresso.entity.ts` |
| `#16` | Lotação e capacidade | `src/modules/lotacao/entities/sessao-palestra.entity.ts` |
| `#17` | Persistência SQLite/PostgreSQL e repositórios | `src/database`, repositórios dos módulos, migration |
| `#18` | Consulta da grade | Endpoint implementado em SQLite; PostgreSQL segue pendente |
| `#19` | Check-in por QR | `AcessosController`, `AcessosService` |
| `#20` | Check-in de inscrição confirmada | `InscricoesController`, `InscricoesService` |
| `#21` | Testes | 23 testes aprovados em `npm test` |

Exemplo de rastreabilidade:

```powershell
gh issue close 15 --comment "Entidade de ingresso e transições validadas. Evidências: src/modules/acessos/entities/ingresso.entity.ts e test/check-in.test.ts."
gh issue close 16 --comment "Lotação e capacidade validadas por testes unitários e integração."
gh issue close 17 --comment "Persistência SQLite concluída e PostgreSQL/TypeORM integrado por migration, mappers e repositórios."
gh issue close 18 --comment "Consulta da grade implementada e validada em SQLite. PostgreSQL desta consulta permanece pendente."
gh issue close 19 --comment "POST /acessos/check-in implementado e validado com testes e Docker/PostgreSQL."
gh issue close 20 --comment "POST /inscricoes/:id/check-in implementado e validado."
gh issue close 21 --comment "Suíte executada com npm test: 23 testes aprovados."
```

Não feche `#18` se a equipe considerar sua persistência PostgreSQL parte obrigatória do requisito da Sub-Issue. Como o PostgreSQL da grade não foi integrado, mantenha essa issue aberta ou refine o aceite.

Interface Web:

1. Abra cada Sub-Issue.
2. Cole o comentário com evidência e PR.
3. Clique em **Close issue**.
4. Abra o Project `Planejamento - TotalEventos`.
5. Confirme o item correspondente na coluna **Done**.

### Passo 6 — Encerrar formalmente a Epic

Antes de fechar `#14`, marque os itens da Epic e confirme que todas as Sub-Issies permitidas já estão fechadas.

```powershell
gh issue edit 14 --body-file <arquivo-da-epic-atualizado>
gh issue close 14 --comment "Epic concluída após integração na main, revisão humana, validação dos testes e fechamento rastreável das Sub-Issues."
```

O arquivo usado no `gh issue edit` deve ser criado somente após a equipe validar os checkboxes.

Interface Web:

1. Abra `#14`.
2. Marque cada Sub-Issue relacionada e cada critério geral confirmado.
3. Adicione links para os PRs mergeados e resultados da bateria final.
4. Clique em **Close issue**.
5. Confirme o card da Epic em **Done** no Project.

Não feche `#14` enquanto `#18` estiver pendente por persistência PostgreSQL, enquanto não houver PR revisado/mergeado ou enquanto houver revisão humana pendente.

## 4. Conclusão deste roteiro

No estado real observado:

- **Técnica local:** a implementação principal dos check-ins, persistência PostgreSQL, Docker e auditoria está implementada.
- **Governança:** a Epic e todas as Sub-Issues continuam abertas.
- **Pull Requests:** não foi encontrada uma cadeia empilhada ou PR final relacionado diretamente à Epic.
- **Conclusão formal:** a confirmar pela integração na `main` e pelo fechamento rastreável no GitHub.

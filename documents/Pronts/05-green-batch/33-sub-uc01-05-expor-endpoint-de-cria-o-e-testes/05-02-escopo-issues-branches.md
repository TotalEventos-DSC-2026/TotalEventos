# 05-02 — Escopo, Issues e Branches

## Issues e dependências

| Issue | Responsabilidade | Dependência |
|---|---|---|
| #29 | Entidade Evento e estado inicial | Nenhuma |
| #30 | DTO e validações de entrada | #29 |
| #31 | Regras temporais e estado | #29, #30 |
| #32 | Persistência SQLite e consulta | #29–31 |
| #33 | Controller/service HTTP de criação e testes | #30–32 |

Issues permanecem abertas e `In Progress`. Os PRs de Material 04 #89–85 estão abertos como Draft. Não há revisão por par confirmada.

## Estratégia

- Branch de implementação isolada: `feature/uc01-29-33-green`.
- Base técnica: Draft PR #85, cuja branch é `feature/33-sub-uc01-05-expor-endpoint-de-cria-o-e-testes-red`; nela foram adicionados os commits dos testes RED #29–32, sem alterar os testes.
- Após GREEN, publicar os commits em fast-forward na branch existente do PR #85, preservando a URL e o estado Draft.
- PRs #89–86 permanecem intactos e Draft; este PR consolidará a execução dos critérios #29–33 no fluxo de criação, documentando explicitamente essa relação.
- Não fazer merge, fechar issues ou mudar o status do projeto.

## Definition of Ready e riscos

Os objetivos, critérios e dependências estão descritos nas issues #29–33. A stack real é TypeScript/NestJS, `node:test` e SQLite (`better-sqlite3`). O contrato REST foi proposto durante o Material 04, mas não foi encontrado como contrato aprovado nas issues; rota, payload e formato/status devem ser validados pela equipe.

O teste #32 também pressupõe `GET /eventos/:id`, um caminho adicional ao objetivo de expor a criação. Implementá-lo é necessário para executar a verificação de persistência já aprovada como parte do escopo combinado #29–33.

## Verificação

- Branch da fase RED: `feature/33-sub-uc01-05-expor-endpoint-de-cria-o-e-testes-red`.
- Pull Request associado: #85, base `main`, aberto Draft.
- Branch de implementação isolada: `feature/uc01-29-33-green`.
- O baseline foi executado no worktree isolado. O worktree principal e suas alterações preexistentes não foram alterados.

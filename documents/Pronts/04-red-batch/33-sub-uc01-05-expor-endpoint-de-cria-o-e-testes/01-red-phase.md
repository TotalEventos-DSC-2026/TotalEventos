# RED Phase - Issue #33

## Issue
- T?tulo: [SUB-UC01-05] Expor endpoint de criação e testes
- URL: https://github.com/TotalEventos-DSC-2026/TotalEventos/issues/33

## Objetivo
Registrar a fase RED do TDD para a issue selecionada, sem implementar a solu??o em produ??o.

## Status
- Branch: `feature/33-sub-uc01-05-expor-endpoint-de-cria-o-e-testes-red`
- Draft PR: a ser criado ap?s o commit inicial
- GitHub Project: `In Progress`
# Fase RED — Issue #33

- Issue: [SUB-UC01-05] Expor endpoint de criação e testes
- Responsável: `ManuMadeira`
- Cenário: criar evento válido por HTTP; validar status e corpo de resposta.
- Teste: `test/evento-endpoint-red.test.ts`.
- RED: resposta 404 em vez de 201, pois `POST /eventos` não existe; asserções de corpo não foram alcançadas.
- Dependências indicadas na issue: SUB-UC01-02, SUB-UC01-03 e SUB-UC01-04.
- Branch: `feature/33-sub-uc01-05-expor-endpoint-de-cria-o-e-testes-red`.
- Commit: `3986ca4`; PR #85: https://github.com/TotalEventos-DSC-2026/TotalEventos/pull/85.
- Estado: In Progress; somente teste, sem merge.

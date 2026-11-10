# RED Phase — Issue #53

- Issue: https://github.com/TotalEventos-DSC-2026/TotalEventos/issues/53
- Branch: feature/53-sub-uc07-03-dto-e-serializa-o-da-resposta-red; PR #65: https://github.com/TotalEventos-DSC-2026/TotalEventos/pull/65 (OPEN/Draft).
- Critério: Serialização pública inclui apenas campos mínimos e úteis, inclusive data, sala, vagas e visibilidade.
- Teste: test/uc07-public-query-red.test.ts; build succeeded; test exit=1.
- Resultado real: O teste começa pelo endpoint proposto POST /eventos; resultado diferente de 201 interrompe o teste antes da consulta do DTO público.
- Commit RED: 57499873cb9e1f607f9b302bdc92faa5ea2cab28; push confirmado.
- Estado In Progress; revisão pendente; sem alterações de produção/GREEN/merge/fechamento.
- Contrato proposto pendente: 04-04-contrato-api-proposto.md.

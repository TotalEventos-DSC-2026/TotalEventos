# RED Phase — Issue #52

- Issue: https://github.com/TotalEventos-DSC-2026/TotalEventos/issues/52
- Branch: feature/52-sub-uc07-02-visibilidade-e-disponibilidade-de-vagas-red; PR #66: https://github.com/TotalEventos-DSC-2026/TotalEventos/pull/66 (OPEN/Draft).
- Critério: Consulta pública sinaliza um evento disponível sem expor dados internos.
- Teste: test/uc07-public-query-red.test.ts; build succeeded; test exit=1.
- Resultado real: O teste começa pelo endpoint proposto POST /eventos; resultado diferente de 201 interrompe o teste antes da consulta de disponibilidade.
- Commit RED: 4bb5e0f5a28968a7cd2576e74e31d42ddf4b328d; push confirmado.
- Estado In Progress; revisão pendente; sem alterações de produção/GREEN/merge/fechamento.
- Contrato proposto pendente: 04-04-contrato-api-proposto.md.

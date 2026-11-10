# Fase RED — Issue #32

- Issue: [SUB-UC01-04] Implementar persistência do evento
- Responsável: `sonwss`
- Cenário: criar evento e recuperá-lo por identificador, preservando `titulo`.
- Teste: `test/evento-persistencia-red.test.ts`.
- RED: criação responde 404 em vez de 201 porque `POST /eventos` não existe; a leitura persistida não é alcançada.
- Branch: `feature/32-sub-uc01-04-implementar-persist-ncia-do-evento-red`.
- Commit: `fcd5560`; PR #86: https://github.com/TotalEventos-DSC-2026/TotalEventos/pull/86.
- Estado: In Progress; somente teste, sem merge.

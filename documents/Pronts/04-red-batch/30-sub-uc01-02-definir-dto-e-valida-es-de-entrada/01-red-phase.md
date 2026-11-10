# Fase RED — Issue #30

- Issue: [SUB-UC01-02] Definir DTO e validações de entrada
- URL: https://github.com/TotalEventos-DSC-2026/TotalEventos/issues/30
- Responsável: `sonwss`
- Teste: `test/evento-dto-red.test.ts`
- Critério: payload incompleto para criação deve ser rejeitado com HTTP 400.
- Resultado: build passou; resposta atual é 404 porque `POST /eventos` não existe. O DTO não foi alcançado.
- Branch: `feature/30-sub-uc01-02-definir-dto-e-valida-es-de-entrada-red`
- Commit do teste: `f419570273439fa891b79ac7f34862567cc837e3`
- Draft PR: https://github.com/TotalEventos-DSC-2026/TotalEventos/pull/88
- Project: `In Progress`

Contrato REST proposto, pendente de revisão. Nenhuma lógica de produção foi alterada.

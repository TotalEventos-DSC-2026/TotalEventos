## Push e Draft PR

- Branch: $branch.
- Push RED:
``text
To https://github.com/TotalEventos-DSC-2026/TotalEventos.git
   7b76a62..5a9a389  feature/28-uc08-pagar-inscri-o-red -> feature/28-uc08-pagar-inscri-o-red
``n- PR existente #90: https://github.com/TotalEventos-DSC-2026/TotalEventos/pull/90 (confirmado OPEN/Draft).
- Corpo proposto/atualizado:

## Draft PR — [UC08] Pagar Inscrição

### Issue
#28 — https://github.com/TotalEventos-DSC-2026/TotalEventos/issues/28

### Objetivo
Preparar a fase RED sem implementação de produção.

### Contrato REST proposto (pendente de revisão)
- `POST /inscricoes/:id/pagamentos`, sem campo de decisão do gateway controlado pelo cliente.
- Gateway externo/test-double decide o resultado: aprovado → `201`; recusado → `402`.
- Status de domínio sugeridos: `PENDENTE`, `APROVADO`, `RECUSADO`, `FALHA`.

### Estado do teste
**Blocked**, não RED: não existe contrato aprovado para um gateway simulado seguro nem abstração atualmente registrada no AppModule. O teste está explicitamente skipped; nenhum outcome foi fabricado nem enviado pelo cliente. `npm run build` passou.

### Estado
In Progress; PR permanece Draft e revisão pendente. RED commit: `5a9a389e5b3f36f2aed42dcd01d547de2c2e70af`. Sem GREEN, merge ou fechamento.

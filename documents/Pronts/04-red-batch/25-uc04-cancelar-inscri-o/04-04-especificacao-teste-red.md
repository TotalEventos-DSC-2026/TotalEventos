# 04-04 — Especificacao do Teste RED

## Cenario
Uma inscricao confirmada ocupa uma vaga. O cancelamento deve persistir `CANCELADA` e devolver a ocupacao da sessao a zero.

## Contrato de transporte proposto
- Rota assumida: `POST /inscricoes/{inscricaoId}/cancelar`.
- Respostas de sucesso assumidas: HTTP 200 ou 204.
- Rota e codigos sao propostas pendentes de validacao; nao sao contrato implementado.

## Preparacao
O teste semeia uma inscricao confirmada e uma sessao de capacidade 1/ocupacao 1 em SQLite local ao worktree.

## Limite da evidencia
A resposta observada foi 404. Nenhuma assercao sobre status persistido ou vaga foi alcancada; nao se conclui que a regra especifica foi testada.
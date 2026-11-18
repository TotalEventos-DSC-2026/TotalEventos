# 11-02 - Contrato público
- POST /acessos/check-in: ingressoId, participanteId, status, updatedAt, message
- POST /inscricoes/:id/check-in: inscricaoId, status, updatedAt, message
- status: 201 em sucesso
- 400 para entrada inválida
- 404 para entidade inexistente
- 409 para operação duplicada ou conflito de domínio

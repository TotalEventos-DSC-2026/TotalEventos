## Contrato REST e gateway propostos — revisão pendente

- POST /inscricoes/:id/pagamentos, sem outcome definido pelo request; payload vazio ou ausência de body (pendente de decisão da equipe).
- Gateway abstrato retorna estado de domínio APROVADO, RECUSADO ou FALHA; PENDENTE durante processamento.
- Aprovação → HTTP 201; recusa → HTTP 402. Falhas e compensação devem preservar consistência (status HTTP a acordar).
- Não existe gateway/simulador seguro aprovado neste branch. O teste permanece bloqueado e não presume qualquer resultado.

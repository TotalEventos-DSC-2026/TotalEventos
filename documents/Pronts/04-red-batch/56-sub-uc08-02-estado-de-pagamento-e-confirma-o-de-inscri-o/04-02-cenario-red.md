## Cenário proposto

Configurar localmente uma resposta aprovada no fake do teste e validar que a inscrição pendente só seja confirmada após essa aprovação.

O request não deve escolher o resultado e o teste não deve chamar gateway externo. A reserva de vaga deve permanecer consistente.

**Resultado atual:** bloqueado. O endpoint/provider não existe no `AppModule`; a transição de domínio não foi executada nem afirmada.

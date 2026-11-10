## Cenário proposto

Configurar explicitamente no fake local uma recusa ou falha de processamento e validar que a inscrição não seja confirmada, a vaga fique consistente e a compensação seja rastreável.

Sem resultado controlado pelo cliente e sem chamadas ao gateway real.

**Resultado atual:** bloqueado; falta endpoint/provider injetável no `AppModule`, portanto nenhuma regra de falha/compensação foi executada.

## Cenário selecionado

Dado AppModule NestJS e SQLite isolado, Serialização pública inclui apenas campos mínimos e úteis, inclusive data, sala, vagas e visibilidade.

Pré-condição: O teste começa pelo endpoint proposto POST /eventos; resultado diferente de 201 interrompe o teste antes da consulta do DTO público.

# ADR-001 — Controle de concorrência adiado no UC15

- **Status:** Aceita
- **Data:** 2026-11-24
- **Decisores:** estudante responsável pelo UC15
- **Caso de uso / fase:** UC15 — Alterar Produto, Fase A

## Contexto
Dupla alteração simultânea pode usar a última gravação sem avisar a outra
operação. O UC15 altera apenas `name` e não existe atributo de versão.

## Decisão
Não haverá controle otimista ou pessimista. Valerá a última gravação.

## Condição para retomar
Quando houver requisitos de conflito, atributo de versão, migration e novo
contrato de erro de concorrência.

## Consequências
- (+) A alteração permanece simples e aditiva.
- (−) Uma alteração simultânea pode sobrescrever outra sem aviso.

## Alternativas consideradas
- Bloqueio com versão — descartada: exige atributo novo, migration e contrato adicional.

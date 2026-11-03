# Artefato 06 — Definition of Ready (DoR)

## 1. Objetivo

Aplicar a Definition of Ready para verificar se cada Sub-Issue pode ser considerada pronta para execução técnica sem ambiguidades impeditivas.

## 2. Critérios DoR

- DoR-01 — Objetivo claramente definido
- DoR-02 — Escopo delimitado
- DoR-03 — Critérios de aceite verificáveis
- DoR-04 — Dependências identificadas
- DoR-05 — Informações disponíveis
- DoR-06 — Responsável definido
- DoR-07 — Revisão concluída

## 3. Avaliação das Sub-Issues

| Identificador | DoR-01 | DoR-02 | DoR-03 | DoR-04 | DoR-05 | DoR-06 | DoR-07 | Resultado consolidado | Pendências | Status recomendado |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `SUB-01` | Atende | Atende | Atende | Atende | Atende | Não atende | Não atende | Parcialmente pronto | Definir responsável e revisão humana | `Backlog` |
| `SUB-02` | Atende | Atende | Atende | Atende | Atende | Não atende | Não atende | Parcialmente pronto | Definir responsável e revisão humana | `Backlog` |
| `SUB-03` | Atende | Atende | Ajuste necessário | Atende | Atende | Não atende | Não atende | Parcialmente pronto | Explicitar transação e definir responsável | `Backlog` |
| `SUB-04` | Atende | Atende | Atende | Atende | Atende | Não atende | Não atende | Parcialmente pronto | Definir responsável e revisão humana | `Backlog` |
| `SUB-05` | Atende | Atende | Ajuste necessário | Atende | Atende | Não atende | Não atende | Parcialmente pronto | Definir cenários de falha e responsável | `Backlog` |
| `SUB-06` | Atende | Atende | Atende | Atende | Atende | Não atende | Não atende | Parcialmente pronto | Definir responsável e revisão humana | `Backlog` |
| `SUB-07` | Atende | Ajuste necessário | Ajuste necessário | Atende | Atende | Não atende | Não atende | Parcialmente pronto | Definir matriz de testes e responsável | `Backlog` |

## 4. Regras da DoR aplicadas

1. Uma issue apenas entra em `Ready` quando os 7 critérios forem atendidos cumulativamente.
2. Enquanto a revisão humana não for registrada, `DoR-07` deve ser considerado pendente.
3. Dependências técnicas não implementadas não impedem a issue de ficar pronta, desde que o contrato e o escopo estejam bem definidos.

## 5. Conclusão

Com base no planejamento atual, nenhuma Sub-Issue está plenamente pronta para `Ready` até que:

- o responsável real seja definido;
- a revisão humana seja formalizada;
- os ajustes de critérios de aceite e transação sejam registrados.

A promoção em massa para `Ready` deve ser evitada até a confirmação da equipe real e da revisão cruzada.

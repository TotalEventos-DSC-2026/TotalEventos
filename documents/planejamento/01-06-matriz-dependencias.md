# Artefato 6 — Matriz de dependências

## Objetivo

Identificar as interdependências entre as unidades de trabalho para orientar a sequência de implementação e evitar bloqueios indevidos.

| Atividade | Atividade pré-requisito | Justificativa técnica da dependência | Condição de desbloqueio | Possibilidade de execução em paralelo |
| --- | --- | --- | --- | --- |
| `SUB-01` — Modelar domínio e estados de ingresso | Nenhuma | Define o contrato central do ingresso e as regras de estado | Entidade do ingresso validada | Sim, parcialmente, com `SUB-02` e `SUB-03` em paralelo da modelagem inicial |
| `SUB-02` — Modelar lotação e capacidade da sessão | `SUB-01` | A sessao depende da regra de disponibilidade e integração com o ingresso | Regras de lotação formalizadas | Sim, com `SUB-01` em paralelo |
| `SUB-03` — Implementar persistência SQLite e repositórios | `SUB-01`, `SUB-02` | Os repositórios precisam conhecer os modelos e suas regras | Entidades e interfaces definidas | Parcialmente, desde que a modelagem base já esteja consistente |
| `SUB-04` — Implementar consulta da grade de sessões | `SUB-02`, `SUB-03` | A consulta depende da existência de dados e do modelo de sessão | Repositórios e filtro de sessão prontos | Sim, após a modelagem de sessão |
| `SUB-05` — Implementar check-in de ingresso por código QR | `SUB-01`, `SUB-02`, `SUB-03` | O fluxo combina validação de QR, sessão, lotação e persistência | Entidade, lotação e persistência concluídas | Não, por depender de todos os blocos primários |
| `SUB-06` — Implementar check-in de inscrição confirmada | `SUB-03` | Precisa da persistência e do modelo de inscrição | Repositório de inscrição funcional | Sim, em paralelo com `SUB-05` a partir do momento em que o repositório estiver pronto |
| `SUB-07` — Definir testes automatizados de unidade e integração | `SUB-04`, `SUB-05`, `SUB-06` | Os testes validam os fluxos após implementação | Módulos principais concluídos | Sim, em paralelo ao fechamento de ajustes finais |

## Sequência recomendada

1. `SUB-01` e `SUB-02` (modelagem do domínio).
2. `SUB-03` (infraestrutura e persistência).
3. `SUB-04` (consulta da grade).
4. `SUB-05` e `SUB-06` (fluxos de check-in).
5. `SUB-07` (validação automatizada).

## Riscos de bloqueio

- A falta de dados iniciais de sessões pode impedir a validação real da consulta da grade em ambiente de execução.
- A transação de check-in de ingresso é o maior ponto crítico de dependência e deve ser priorizada antes da consolidação final.
- Qualquer incompatibilidade entre modelos de domínio e persistência pode bloquear os fluxos de acessos e inscrições.

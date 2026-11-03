# Artefato 03 — Matriz de distribuição das Sub-Issues

## 1. Objetivo

Distribuir as Sub-Issues do caso de uso com base em dependências técnicas, complexidade e revisão cruzada, preservando a rastreabilidade da etapa anterior.

## 2. Sub-Issues do projeto

| Identificador | Título da atividade | Complexidade | Dependências técnicas | Responsável (assignee) | Revisor | Status atual | Status recomendado | Justificativa |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `SUB-01` | Modelar domínio e estados de ingresso | Média | Nenhuma crítica | `A definir` | `A definir` | `A definir` | `Ready` | Base para regras de negócio e validações |
| `SUB-02` | Modelar lotação e capacidade da sessão | Média | `SUB-01` | `A definir` | `A definir` | `A definir` | `Ready` | Determina disponibilidade e sobrelotação |
| `SUB-03` | Implementar persistência SQLite e repositórios | Alta | `SUB-01`, `SUB-02` | `A definir` | `A definir` | `A definir` | `Backlog` | Infraestrutura crítica para acessos e inscrições |
| `SUB-04` | Implementar consulta da grade de sessões | Média | `SUB-02`, `SUB-03` | `A definir` | `A definir` | `A definir` | `Ready` | Requere integração da consulta e filtros |
| `SUB-05` | Implementar check-in de ingresso por código QR | Alta | `SUB-01`, `SUB-02`, `SUB-03` | `A definir` | `A definir` | `A definir` | `Ready` | Bloco crítico com transação e validação |
| `SUB-06` | Implementar check-in de inscrição confirmada | Média | `SUB-03` | `A definir` | `A definir` | `A definir` | `Backlog` | Requer persistência e regras de inscrição |
| `SUB-07` | Definir testes automatizados de unidade e integração | Média | `SUB-04`, `SUB-05`, `SUB-06` | `A definir` | `A definir` | `A definir` | `Backlog` | Validação final dos critérios de aceite |

## 3. Critérios obrigatórios de distribuição

1. O revisor precisa ser diferente do responsável pela execução da Sub-Issue.
2. A carga de trabalho deve considerar complexidade e dependências, não apenas quantidade de itens.
3. Atividades com dependência crítica devem ser alinhadas para evitar bloqueios.

## 4. Observação sobre a equipe atual

Como não houve confirmação dos dados reais dos integrantes, a matriz acima deve ser preenchida no GitHub assim que a equipe estiver definida. O uso de `A definir` representa uma tarefa pendente de decisão do grupo ou do professor.

## 5. Conclusão

A distribuição formal deve ser registrada no GitHub como assignee e reviewer de cada issue. Enquanto isso, a matriz acima funciona como referência técnica de alocação e governança.

# Artefato 7 — Plano de labels

## Objetivo

Definir um conjunto coerente de labels para classificar as Issues e facilitar a organização, priorização e rastreabilidade do projeto no GitHub.

## Estrutura proposta

| Nome da label | Cor sugerida | Finalidade / descrição | Onde será aplicada |
| --- | --- | --- | --- |
| `feature` | `#0E8A16` | Funcionalidade principal da aplicação | Epic e Sub-Issues de implementação |
| `bug` | `#D73A4A` | Correção de defeitos | issues de correção e regressões |
| `test` | `#FBCA04` | Atividades de validação automatizada | `SUB-07` e iterações de testes |
| `documentation` | `#0075CA` | Atualização de documentação | artefatos, README e guias |
| `domain` | `#5319E7` | Modelagem e regras de negócio do domínio | `SUB-01`, `SUB-02` |
| `application` | `#1D76DB` | Lógica de aplicação e serviços | `SUB-05`, `SUB-06` |
| `infra` | `#6F42C1` | Persistência, banco e infraestrutura | `SUB-03` |
| `api` | `#0E7490` | Interfaces e endpoints HTTP | `SUB-04` |
| `lotacao` | `#BFD4F2` | Controle de lotação e capacidade | `SUB-02`, `SUB-05` |
| `acessos` | `#C5DEF5` | Fluxo de check-in de ingresso | `SUB-01`, `SUB-05` |
| `inscricoes` | `#F9D0C4` | Fluxo de inscrições e check-in | `SUB-06` |
| `grade-sessoes` | `#FAD8C7` | Consulta da grade de sessões | `SUB-04` |
| `P1` | `#B60205` | Prioridade máxima | tarefas críticas do fluxo de eventos |
| `P2` | `#FBCA04` | Prioridade média | tarefas importantes mas não críticas |
| `P3` | `#0E8A16` | Prioridade baixa | atividades de suporte e refinamento |

## Recomendações de uso

- A `Epic` principal deve receber labels de `feature` e `P1` ou `P2`, conforme a criticidade do projeto e do cronograma.
- Sub-Issues específicas devem receber pelo menos uma label funcional e uma label técnica.
- O uso combinado de `domain`, `application` e `infra` ajuda a classificar a camada responsável pela atividade.
- Labels de domínio e de tipo podem coexistir sem conflito.

## Observação

As cores sugeridas são orientativas. O projeto pode ajustar a paleta conforme a identidade visual do repositório, desde que mantenha a semântica das labels.

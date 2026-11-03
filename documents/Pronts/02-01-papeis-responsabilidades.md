# Artefato 01 — Matriz de papéis e responsabilidades

## 1. Objetivo

Definir os papéis funcionais da equipe, a distribuição de responsabilidades e a governança mínima necessária para a execução do caso de uso `UC01`.

## 2. Contexto do projeto

O projeto TotalEventos possui como epic principal:

- `[UC01] Consultar grade de sessões e registrar check-ins de eventos`

A estrutura de trabalho já foi definida na etapa anterior e inclui 7 Sub-Issues:

- `SUB-01` — Modelar domínio e estados de ingresso
- `SUB-02` — Modelar lotação e capacidade da sessão
- `SUB-03` — Implementar persistência SQLite e repositórios
- `SUB-04` — Implementar consulta da grade de sessões
- `SUB-05` — Implementar check-in de ingresso por código QR
- `SUB-06` — Implementar check-in de inscrição confirmada
- `SUB-07` — Definir testes automatizados de unidade e integração

## 3. Comissão funcional da equipe

### Equipe atual

| Integrante | GitHub | Papel funcional | Funções principais | Funções secundárias | Observações |
| --- | --- | --- | --- | --- | --- |
| Integrante 1 | `A definir` | `A definir` | `A definir` | `A definir` | Necessário confirmar nome, perfil e disponibilidade real |
| Integrante 2 | `A definir` | `A definir` | `A definir` | `A definir` | Necessário confirmar nome, perfil e disponibilidade real |

## 4. Papéis recomendados

### Coordenador
- Acompanhar cronograma e priorização.
- Remover impedimentos e alinhar comunicação interna.
- Validar que dependências críticas não bloqueiem a execução.

### Responsável Técnico / Tech Lead
- Definir padrões arquiteturais e decisões técnicas.
- Validar a aderência dos contratos, modelos e regras de negócio.
- Apoiar revisão de critérios de aceite e DoR.

### Desenvolvedor
- Executar atividades de implementação e testes específicos.
- Registrar dúvidas técnicas e evidências de progresso.
- Entregar versões consistentes por Sub-Issue.

### Revisor de Issues
- Validar clareza do escopo e critérios de aceite.
- Confirmar dependências, prontidão e organização no board.
- Garantir revisão cruzada independente em relação ao responsável da atividade.

## 5. Proposta de alocação inicial

Como os dados da equipe ainda estão em `A definir`, a distribuição recomendada deve ser ajustada na prática por quem coordena o grupo. A estrutura de alocação sugerida é:

| Função | Responsável sugerido | Observação |
| --- | --- | --- |
| Coordenação geral | `A definir` | Pessoa com visão global do projeto e ritmo do grupo |
| Responsável técnico | `A definir` | Deve participar da validação de arquitetura e regras de negócio |
| Desenvolvimento principal | `A definir` | Alocado por Sub-Issue, conforme carga e perfil |
| Revisão cruzada | `A definir` | Deve ser diferente do assignee da tarefa |

## 6. Regras de governança

- Cada Sub-Issue deve ter, no mínimo, um responsável e um revisor distintos.
- O revisor deve avaliar a clareza técnica e a completude antes da promoção para `Ready`.
- O papel de coordenador não elimina a necessidade de revisão independente.
- Quando a equipe for individual, essa condição deve ser explicitada e justificada no relatório.

## 7. Conclusão

A matriz acima deve ser atualizada assim que a equipe real for confirmada. Enquanto isso, os critérios e a estrutura da governança permanecem válidos, e a atribuição formal deve ser registrada no GitHub conforme o planejamento da equipe.

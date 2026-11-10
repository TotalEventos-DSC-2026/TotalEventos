# Planejamento Geral dos Casos de Uso — TotalEventos

## 1. Base de entrada

Este documento consolida o planejamento técnico para todos os casos de uso definidos no documento de invariantes e casos de uso do projeto **TotalEventos**.

**Fonte documental base:**
- `documents/04-invariantes-casos-de-uso.md`
- `documents/planejamento/00-01-planejamento-epic-uc05-criar-evento.md`

## 2. Visão geral dos casos de uso

| ID | Caso de Uso | Ator Principal | Objetivo | Resultado Esperado | Prioridade |
| --- | --- | --- | --- | --- | --- |
| `UC01` | Criar Evento | Organizador | Registrar um evento em preparação | Evento criado em rascunho | Alta |
| `UC02` | Publicar Evento | Organizador | Tornar evento visível para inscrição | Evento publicado e aberto ao público | Alta |
| `UC03` | Inscrever-se em Evento | Participante | Reservar vaga no evento/sessão | Inscrição confirmada e vaga reservada | Alta |
| `UC04` | Cancelar Inscrição | Participante | Liberar vaga ao desistir | Inscrição cancelada e vaga restaurada | Média |
| `UC05` | Registrar Presença | Equipe de Credenciamento / Totem | Confirmar presença física por QR | Presença computada, respeitando lotação | Alta |
| `UC06` | Cancelar Evento | Organizador | Encerrar evento sem realização | Evento cancelado e participantes tratados | Média |
| `UC07` | Consultar Eventos Disponíveis | Participante | Visualizar eventos/sessões disponíveis | Grade/listagem disponível | Alta |
| `UC08` | Pagar Inscrição | Participante | Efetivar inscrição paga | Pagamento aprovado e inscrição efetivada | Baixa / futura |

## 3. Invariantes críticas que impactam todos os casos de uso

| ID | Regra | Impacto nos Casos de Uso |
| --- | --- | --- |
| `RN01` | Validação de duplicidade de acesso | Afeta `UC05` diretamente; também exige consistência para QR e registros de presença |
| `RN02` | Trava por limite físico legal de lotação | Afeta `UC03`, `UC04`, `UC05`, `UC06` e `UC07` em termos de disponibilidade e visibilidade |
| `RN03` | Elegibilidade para certificação | Relevante para eventos com presença/frequência, possivelmente em extensões futuras |
| `RN04` | Prevenção de choque de horários | Afeta `UC03` e `UC07` na lógica de reserva e visualização |
| `RN05` | Contenção por margem offline | Afeta `UC05` em ambiente de credenciamento físico e operação distribuída |

## 4. Sequência sugerida de desenvolvimento

A sequência abaixo considera dependências técnicas e de negócio da plataforma:

1. `UC01` — Criar Evento
2. `UC02` — Publicar Evento
3. `UC07` — Consultar Eventos Disponíveis
4. `UC03` — Inscrever-se em Evento
5. `UC04` — Cancelar Inscrição
6. `UC05` — Registrar Presença
7. `UC06` — Cancelar Evento
8. `UC08` — Pagar Inscrição (futuro / secundário)

## 5. Mapeamento por epic e sub-issues

### `UC01` — Criar Evento
- Epic principal sugerida: `[UC01] Criar Evento`
- Sub-issues sugeridas:
  - `SUB-UC01-01` — Modelagem do evento
  - `SUB-UC01-02` — DTO/validação de entrada
  - `SUB-UC01-03` — Regras de datas e estado em rascunho
  - `SUB-UC01-04` — Persistência
  - `SUB-UC01-05` — Endpoint e testes

### `UC02` — Publicar Evento
- Epic principal sugerida: `[UC02] Publicar Evento`
- Sub-issues sugeridas:
  - `SUB-UC02-01` — Estado de publicação e visibilidade
  - `SUB-UC02-02` — Regras de período de inscrição
  - `SUB-UC02-03` — Persistência e consulta pública
  - `SUB-UC02-04` — Endpoint de publicação

### `UC03` — Inscrever-se em Evento
- Epic principal sugerida: `[UC03] Inscrever-se em Evento`
- Sub-issues sugeridas:
  - `SUB-UC03-01` — Modelagem de inscrição e capacidade
  - `SUB-UC03-02` — Validação de conflitos e disponibilidade
  - `SUB-UC03-03` — Persistência da inscrição
  - `SUB-UC03-04` — Endpoint de inscrição
  - `SUB-UC03-05` — Testes de integração

### `UC04` — Cancelar Inscrição
- Epic principal sugerida: `[UC04] Cancelar Inscrição`
- Sub-issues sugeridas:
  - `SUB-UC04-01` — Estado de cancelamento
  - `SUB-UC04-02` — Liberação de vaga
  - `SUB-UC04-03` — Persistência e auditoria
  - `SUB-UC04-04` — Endpoint de cancelamento

### `UC05` — Registrar Presença
- Epic principal já existente: `[UC01] Consultar grade de sessões e registrar check-ins de eventos`
- Observação: o planejamento técnico deste caso já foi documentado e estruturado em GitHub com sub-issues `SUB-01` a `SUB-07`.
- O uso de `UC05` nesta visão geral deve ser considerado como o caso crítico e de maior prioridade operacional.

### `UC06` — Cancelar Evento
- Epic principal sugerida: `[UC06] Cancelar Evento`
- Sub-issues sugeridas:
  - `SUB-UC06-01` — Estado de cancelamento do evento
  - `SUB-UC06-02` — Notificação e tratamento de participantes
  - `SUB-UC06-03` — Atualização de disponibilidade e concorrência
  - `SUB-UC06-04` — Endpoint e testes

### `UC07` — Consultar Eventos Disponíveis
- Epic principal sugerida: `[UC07] Consultar Eventos Disponíveis`
- Sub-issues sugeridas:
  - `SUB-UC07-01` — Consultas e filtros por evento/data/sala
  - `SUB-UC07-02` — Visibilidade e disponibilidade de vagas
  - `SUB-UC07-03` — DTO e serialização da resposta
  - `SUB-UC07-04` — Testes de consulta pública

### `UC08` — Pagar Inscrição
- Epic principal sugerida: `[UC08] Pagar Inscrição`
- Sub-issues sugeridas:
  - `SUB-UC08-01` — Definição de gateway/payment status
  - `SUB-UC08-02` — Estado de pagamento e confirmação de inscrição
  - `SUB-UC08-03` — Regras de compensação e falha
  - `SUB-UC08-04` — Endpoint e testes
- Observação: por ser um fluxo secundário/futuro, deve ser tratado como expansão posterior, após a base operacional do evento/inscrição e do check-in.

## 6. Rastreabilidade por caso de uso

| Caso de Uso | Regras de Negócio Chave | Módulos/Partes Afetadas |
| --- | --- | --- |
| `UC01` | Estado de rascunho, validação de dados, datas e organização | evento, evento-service, persistência |
| `UC02` | Publicação, período de inscrição, visibilidade | evento, publicação, consulta pública |
| `UC03` | Disponibilidade, desempate de vagas, conflitos de horário | inscrição, lotação, evento |
| `UC04` | Liberação de vaga ao cancelar, consistência de saldo | inscrição, lotação |
| `UC05` | QR válido, duplicidade, sobrelotação, transação | acessos, lotacao, ingresso |
| `UC06` | Cancelamento de evento, notificação e reposição de vagas | evento, inscrição |
| `UC07` | Consulta de eventos e filtros | grade-sessoes, consulta pública |
| `UC08` | Pagamento e confirmação oficial da inscrição | pagamento, inscrição, auditoria |

## 7. Recomendação executiva

Para o projeto atual, a priorização recomendada é:

- Fase 1: `UC01`, `UC02`, `UC07`, `UC03`, `UC05`
- Fase 2: `UC04`, `UC06`
- Fase 3: `UC08` (secundário/futuro)

A razão da priorização é que os fluxos centrais do sistema são: criação do evento, publicação, consulta, inscrição e presença. Esses quatro eixos determinam a viabilidade operacional do produto e a validade do modelo de negócio.

## 8. Conclusão

O conjunto de casos de uso do TotalEventos forma uma cadeia funcional coesa: o evento é criado e publicado, o participante consulta e se inscreve, a lotação é controlada e a presença é confirmada. O sistema funciona como uma plataforma de credenciamento e gestão de eventos, com regras críticas de ocupação, fraude e consistência que devem ser tratadas como prioridades arquiteturais.

O caso `UC05` já possui planejamento técnico detalhado no repositório; os demais casos devem seguir a mesma lógica de decomposition, issue, board e rastreabilidade para manter alinhamento metodológico com o restante do projeto.

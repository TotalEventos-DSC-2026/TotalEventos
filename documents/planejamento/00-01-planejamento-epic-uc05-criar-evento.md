# Relatório de Planejamento Épico — EPIC-UC05: Criar Evento

## 1. Objetivo da Épica
Estabelecer o plano de trabalho e a rastreabilidade técnica para a implementação do caso de uso UC05 — Criar Evento no sistema TotalEventos, garantindo a criação segura, validação estrita de dados/datas e persistência durável dos eventos em rascunho.

## 2. Estrutura de Decomposição das Sub-Tarefas
* **SUB-01 [Domínio]:** Modelar entidade `Evento` (agregado raiz).
* **SUB-02 [Contratos]:** Criar `CriarEventoDto` com validações declarativas na borda HTTP.
* **SUB-03 [Validação]:** Implementar validações de regras temporais (`dataInicio >= agora`, `dataFim > dataInicio`).
* **SUB-04 [Persistência]:** Implementar o contrato `EventosRepository` e o adaptador SQLite.
* **SUB-05 [Aplicação]:** Implementar o serviço de aplicação orchestrador da criação.
* **SUB-06 [HTTP]:** Expor o endpoint `POST /eventos` no Controller.
* **SUB-07 [Testes]:** Desenvolver a suíte de testes unitários e de integração.
* **SUB-08 [Documentação]:** Consolidar a documentação técnica e os relatórios operacionais.

## 3. Critérios de Aceite Globais (CA01 - CA05)
* [ ] **CA01:** Solicitação com dados válidos e data futura cadastra o evento em rascunho.
* [ ] **CA02:** Solicitação com data de início retroativa é rejeitada.
* [ ] **CA03:** Nenhuma solicitação rejeitada gera gravação no banco de dados.
* [ ] **CA04:** Fluxos principal e alternativos cobertos por testes automatizados.
* [ ] **CA05:** Respostas HTTP alinhadas com os padrões REST (201 Created para sucesso, 400 Bad Request para falhas de validação).

## 4. Próximos Passos
* Manter o acompanhamento do progresso de implementação através dos commits e Pull Requests associados às sub-issues `SUB-01` a `SUB-08`.
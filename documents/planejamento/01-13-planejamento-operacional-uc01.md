# 📋 Relatório Sintético de Planejamento Operacional — UC01

## 1. Matriz de Priorização Técnica das Sub-Issues
Com base na análise das tarefas do caso de uso `[UC01]`, a priorização técnica considerou dependências, valor e risco:
* **[SUB-01] Modelar domínio e estados de ingresso:** Prioridade alta. Define as entidades e as regras de negócio essenciais para o restante do sistema.
* **[SUB-02] Modelar lotação e capacidade da sessão:** Prioridade alta. Essencial para garantir a integridade dos dados e evitar sobrelotação.
* **[SUB-03] Implementar persistência SQLite e repositórios:** Prioridade alta. Garante o armazenamento e a consistência transacional necessária.
* **[SUB-04] Implementar consulta da grade de sessões:** Prioridade média-alta. Viabiliza a entrega funcional principal de consulta.
* **[SUB-05] e [SUB-06] Implementar check-in (QR Code / Inscrição):** Prioridade operacional. Dependem diretamente da estabilização da persistência e do domínio.
* **[SUB-07] Definir testes automatizados de unidade e integração:** Acompanha o desenvolvimento progressivamente.

## 2. Mapeamento de Dependências e Paralelismo
* **Dependência de Contrato / Domínio:** As sub-issues de persistência e comportamento dependem das definições entregues em `[SUB-01]` e `[SUB-02]`.
* **Paralelismo Viável:** Após a consolidação do domínio base, as frentes de persistência (`[SUB-03]`) e de consulta da grade (`[SUB-04]`) podem avançar simultaneamente.

```mermaid
graph TD
    A[SUB-01: Modelar domínio] --> C[SUB-03: Persistência SQLite]
    A --> D[SUB-04: Consulta da grade]
    B[SUB-02: Modelar lotação] --> E[SUB-05 & SUB-06: Check-ins]
    C --> E
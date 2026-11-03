# Artefato 05 — Comentários técnicos para o GitHub

## 1. Objetivo

Preparar comentários prontos para inserção em cada Sub-Issue, com foco em revisão técnica e critérios de prontidão.

---

## 2. Comentário padrão para `SUB-01`

### 📋 Revisão Técnica — `SUB-01` — Modelar domínio e estados de ingresso

**Revisor:** `A definir`

**Objetivo verificado:** O objetivo da tarefa está claro e coerente com o fluxo de ingressos.

**Pontos avaliados:**
- Regras de estado do ingresso;
- Validação do código QR e uso do ingresso;
- Relação entre ingresso, participante e sessão.

**Observações:**
- O texto da issue está compatível com o caso de uso.
- Recomendação: confirmar o conjunto exato de estados e mensagens esperadas.

**Condição para prontidão (`Ready`):**
- Definir explicitamente o estado inicial e os estados de transição do ingresso.

---

## 3. Comentário padrão para `SUB-02`

### 📋 Revisão Técnica — `SUB-02` — Modelar lotação e capacidade da sessão

**Revisor:** `A definir`

**Objetivo verificado:** A atividade está alinhada ao controle de capacidade.

**Pontos avaliados:**
- Capacidade máxima;
- Ocupação atual;
- Situações de sobrelotação e disponibilidade.

**Observações:**
- O escopo está bem delimitado.
- Recomendação: explicitar como a capacidade será validada nas operações críticas.

**Condição para prontidão (`Ready`):**
- Definir regra final para manutenção da ocupação e rejeição de entrada quando a capacidade for atingida.

---

## 4. Comentário padrão para `SUB-03`

### 📋 Revisão Técnica — `SUB-03` — Implementar persistência SQLite e repositórios

**Revisor:** `A definir`

**Objetivo verificado:** A atividade é essencial para o projeto.

**Pontos avaliados:**
- Estrutura de banco;
- Repositórios de ingressos, inscrições e lotação;
- Transações e consistência.

**Observações:**
- Há necessidade de deixar explícita a operação transacional do check-in.
- Recomendação: detalhar como as alterações de ingresso e lotação passarão a ser persistidas em uma única transação.

**Condição para prontidão (`Ready`):**
- A issue deve descrever claramente a camada de persistência e o contrato de transação.

---

## 5. Comentário padrão para `SUB-04`

### 📋 Revisão Técnica — `SUB-04` — Implementar consulta da grade de sessões

**Revisor:** `A definir`

**Objetivo verificado:** O caso de uso está claro e a consulta de grade é funcionalmente consistente.

**Pontos avaliados:**
- Filtros por data, horário e sala;
- Sessões publicadas e ativas;
- Resposta vazia e erro de entrada.

**Observações:**
- O texto está adequado para início do desenvolvimento.
- Recomendação: validar combinações e mensagens de erro.

**Condição para prontidão (`Ready`):**
- Garantir que o endpoint e os critérios de aceite estejam alinhados ao caso de uso.

---

## 6. Comentário padrão para `SUB-05`

### 📋 Revisão Técnica — `SUB-05` — Implementar check-in de ingresso por código QR

**Revisor:** `A definir`

**Objetivo verificado:** A tarefa é crítica para o fluxo principal do projeto.

**Pontos avaliados:**
- Validação de QR;
- Regras de ingresso já utilizado;
- Atualização de lotação e persistência atômica.

**Observações:**
- Necessário explicitar cenários de falha: QR inválido, ingresso indisponível e lotação esgotada.
- Recomendação: documentar response status e mensagem esperada.

**Condição para prontidão (`Ready`):**
- A issue deve descrever o fluxo de sucesso e todos os cenários de rejeição.

---

## 7. Comentário padrão para `SUB-06`

### 📋 Revisão Técnica — `SUB-06` — Implementar check-in de inscrição confirmada

**Revisor:** `A definir`

**Objetivo verificado:** A atividade está coerente com o fluxo de inscrições.

**Pontos avaliados:**
- Estado `CONFIRMADA`;
- Duplicidade de check-in;
- Persistência do estado da inscrição.

**Observações:**
- A descrição técnica está adequada.
- Recomendação: detalhar comportamento quando a inscrição não existir ou estiver em outro estado.

**Condição para prontidão (`Ready`):**
- Garantir critérios de aceite para sucesso e rejeição.

---

## 8. Comentário padrão para `SUB-07`

### 📋 Revisão Técnica — `SUB-07` — Definir testes automatizados de unidade e integração

**Revisor:** `A definir`

**Objetivo verificado:** A atividade é necessária para validar os fluxos principais.

**Pontos avaliados:**
- Cobertura de sucesso e falha;
- Casos de lotação e duplicidade;
- Verificação dos endpoints e bancos de dados.

**Observações:**
- A issue precisa indicar claramente quais testes são obrigatórios e como serão evidenciados.

**Condição para prontidão (`Ready`):**
- Definir a matriz mínima de testes e critérios de aceitação da validação final.

---

## 9. Template padrão de conclusão de revisão

```markdown
### 📋 Registro de Revisão de Planejamento

**Revisor:** @[usuario_github]
**Issue:** [SUB-XX] - [Título da Sub-Issue]
**Data da Revisão:** [DD/MM/AAAA]
**Resultado:** [ ] Aprovada sem ressalvas | [ ] Aprovada com ajustes menores | [ ] Ajustes necessários solicitados

**Observações Técnicas:**
- [Registro dos pontos verificados na especificação e critérios de aceite]

**Ajustes Solicitados:**
- [Ajustes que o responsável pela Issue precisa aplicar no texto/critérios, se houver]

**Conclusão e Prontidão:**
- [Indicação se a Issue está liberada para o estado 'Ready' ou deve aguardar ajustes em 'Backlog']
```

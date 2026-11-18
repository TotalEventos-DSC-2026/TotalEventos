# 02-07 — Plano de Atualização do GitHub

## Objetivo
Documentar a execução operacional de revisão e atualização das Issues no GitHub antes do início da implementação.

## Procedimento operacional
### 1. Conferência de integridade
- Validar a existência do Epic principal e de todas as Sub-Issues.
- Confirmar os títulos e os IDs em relação à documentação do planejamento.
- Verificar que os itens estão no projeto correto.

### 2. Atualização de assignees
- Atribuir o assignee real de cada issue.
- Garantir que o assignee e o reviewer sejam diferentes.
- Registrar a pessoa responsável pela revisão de cada atividade.

### 3. Publicação dos comentários de revisão
- Publicar o comentário técnico de revisão em cada issue.
- Registrar observações e ajustes solicitados.
- Manter a linguagem técnica e objetiva.

### 4. Ajustes de descrição
- Completar payloads e exemplos relevantes.
- Ajustar dependências, retorno e regras de concorrência.
- Revisar critérios de aceite e mensagens de erro.

### 5. Governança do board
- Continuar usando o campo `Status do Board`.
- Estados permitidos: `Backlog`, `Ready`, `In Progress`, `In Review`, `Done`.
- Somente issues com DoR completa devem ir para `Ready`.
- Issues sem responsável ou sem revisão humana devem permanecer em `Backlog`.
- Não criar labels de status.

### 6. Auditoria final do board
- Conferir a coerência visual das colunas.
- Verificar se a ordem dos itens respeita dependência técnica.
- Registrar pendências e próximos ajustes.

## Checklist executivo
- [ ] Epic e Sub-Issues verificadas
- [ ] Assignee e reviewer registrados
- [ ] Comentários publicados
- [ ] Ajustes de descrição concluídos
- [ ] DoR aplicada por item
- [ ] Board revisado e consistente

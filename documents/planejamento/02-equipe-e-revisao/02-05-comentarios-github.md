# 02-05 — Comentários Técnicos para o GitHub

## Template padrão
```markdown
### 📋 Registro de Revisão de Planejamento

**Revisor:** @[usuario_github]
**Issue:** [SUB-XX] - [Título da Sub-Issue]
**Data da Revisão:** [DD/MM/AAAA]
**Resultado:** [ ] Aprovada sem ressalvas | [ ] Aprovada com ajustes menores | [ ] Ajustes necessários solicitados

**Observações Técnicas:**
- [Verificar descrição, critérios de aceite e dependências]

**Ajustes Solicitados:**
- [Descrever ajustes específicos]

**Conclusão e Prontidão:**
- [Liberada para `Ready` ou mantida em `Backlog`]
```

## Comentários resumidos por issue
| Issue | Comentário técnico |
| --- | --- |
| `SUB-UC01-01` | Confirmar agregação do evento, estados e dados essenciais do domínio. |
| `SUB-UC01-02` | Adicionar exemplos de payload válido e inválido. |
| `SUB-UC01-03` | Validar regras temporais e conflitos de estado. |
| `SUB-UC01-04` | Definir contrato do repositório e a persistência em SQLite. |
| `SUB-UC01-05` | Definir status HTTP e cenários de integração. |
| `SUB-UC02-01` | Revisar visibilidade pública e regras de transição. |
| `SUB-UC02-02` | Confirmar regras de calendário e início/fim de inscrição. |
| `SUB-UC02-03` | Especificar consulta pública e dados visíveis. |
| `SUB-UC02-04` | Indicar sucesso e falha do endpoint de publicação. |
| `SUB-UC03-01` | Garantir que a inscrição represente ocupação de vaga. |
| `SUB-UC03-02` | Reforçar regras de lotação, duplicidade e conflito. |
| `SUB-UC03-03` | Definir estados e consultas relevantes da inscrição. |
| `SUB-UC03-04` | Explicitar retorno e cenários de concorrência. |
| `SUB-UC03-05` | Incluir testes de lotação esgotada e inscrição duplicada. |
| `SUB-UC04-01` | Diferenciar inscrição ativa da cancelada. |
| `SUB-UC04-02` | Dar clareza à liberação de vagas em concorrência. |
| `SUB-UC04-03` | Registrar o motivo e a data do cancelamento. |
| `SUB-UC04-04` | Descrever retorno para inscrição inexistente e falha. |
| `SUB-UC06-01` | Confirmar que o evento cancelado não permite novos fluxos. |
| `SUB-UC06-02` | Incluir política de notificação aos participantes. |
| `SUB-UC06-03` | Especificar reversão de vagas e sincronização. |
| `SUB-UC06-04` | Informar retorno do endpoint e casos de erro. |
| `SUB-UC07-01` | Definir filtros por evento, data e sala. |
| `SUB-UC07-02` | Clarificar disponibilidade e visibilidade da vaga. |
| `SUB-UC07-03` | Especificar DTO público e estrutura da resposta. |
| `SUB-UC07-04` | Cobrir cenários de evento lotado e sem resultado. |
| `SUB-UC08-01` | Especificar contrato e status do gateway. |
| `SUB-UC08-02` | Reforçar que pagamento aprovado confirma inscrição. |
| `SUB-UC08-03` | Definir rollback e compensação em caso de falha. |
| `SUB-UC08-04` | Incluir sucesso e falha do endpoint de pagamento. |

## Observação
Os comentários acima devem ser publicados por um revisor humano no GitHub para que a issue seja considerada pronta para `Ready`.

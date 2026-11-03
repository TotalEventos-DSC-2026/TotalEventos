# Artefato 12 — Relatório de consistência e cobertura

## Resumo executivo

O planejamento técnico do caso de uso foi estruturado em 1 Epic e 7 Sub-Issues, totalizando 8 itens de trabalho de implementação e rastreabilidade. A distribuição cobre os pontos centrais do projeto: consulta da grade de sessões, controle de acessos, check-in de ingressos, validação de inscrições e gestão de lotação.

## Cobertura dos requisitos e fluxos

| Área do caso de uso | Cobertura | Observação |
| --- | --- | --- |
| Consulta da grade de sessões | Coberta por `SUB-04` | Inclui filtros de data, horário e sala |
| Estado e regra de ingresso | Coberta por `SUB-01` | Base para validação do check-in |
| Lotação e capacidade | Coberta por `SUB-02` | Regras críticas de segurança e integridade |
| Persistência | Coberta por `SUB-03` | Necessária para dados reais em SQLite |
| Check-in de ingresso | Coberta por `SUB-05` | Operação transacional e crítica |
| Check-in de inscrição | Coberta por `SUB-06` | Validações de confirmação e duplicidade |
| Testes automatizados | Coberta por `SUB-07` | Garante verificação de sucesso e falha |

## Mapeamento de dependências críticas

- `SUB-03` é o ponto de suporte de toda a persistência e deve ser priorizada após a modelagem de domínio.
- `SUB-05` é a atividade crítica do fluxo de entrada, pois combina validação de estado, lotação e transação.
- `SUB-07` é a etapa de fechamento do planejamento e deve ser executada após a estabilização dos fluxos funcionais.

## Decisões técnicas e arquiteturais dependentes de confirmação

- A estrutura modular em NestJS e a divisão por módulos já é coerente com a solução atual e pode ser mantida.
- O uso de SQLite como mecanismo de persistência é aderente ao projeto documentado.
- A definição da entrada inicial de dados de sessões e eventos depende de uma decisão operacional da equipe, pois a execução sem carga inicial pode resultar em programação vazia.
- A estratégia de responsabilidade definida no board pode ser refinada conforme o número de integrantes da equipe.

## Riscos técnicos mapeados

- Falta de dados iniciais para a consulta de grade.
- Duplicidade de check-ins e uso indevido de QR.
- Sobrelotação de sessões.
- Bloqueio de persistência por inconsistência entre modelos de domínio e repositórios.
- Necessidade de revisão de critérios de teste para cobrir cenários de exceção.

## Recomendações para início da implementação

1. Validar a modelagem de domínio e o estado do ingresso.
2. Implementar a infraestrutura de persistência e a lotação em seguida.
3. Priorizar `SUB-05` para garantir que a operação de check-in mais crítica esteja estável.
4. Em seguida, realizar a consulta da grade e o check-in de inscrição.
5. Finalizar com a validação automatizada e revisão do board.

## Conclusão

O planejamento atende ao caso de uso documentado, mantém consistência entre requisitos, dependências e critérios de aceite e oferece uma base sólida para a migração para o GitHub em formato de Issues, labels e board Kanban.

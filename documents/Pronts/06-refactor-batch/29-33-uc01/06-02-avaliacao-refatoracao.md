# 06-02 — Avaliação da Refatoração

## Análise estrutural

| Critério | Observação | Classificação |
|---|---|---|
| Clareza e nomenclatura | `Evento`, `CriarEventoDto`, `EventosService` e `SqliteEventosRepository` expressam bem o domínio e as responsabilidades. | Adequado |
| Coesão | Controller traduz HTTP, serviço coordena criação/busca, entidade aplica invariantes temporais e repositório persiste/reconstitui. | Adequado |
| Duplicação | Não foi identificada duplicação relevante entre os nove arquivos de produção examinados. | Sem problema comprovado |
| Complexidade | Fluxos curtos, guard clauses no DTO e parâmetros SQL; não há abstrações ou ramificações excessivas. | Adequado |
| Acoplamento/arquitetura | Serviço depende da interface de repositório via token de injeção; SQLite permanece no adaptador. | Adequado |
| Legibilidade/manutenção | Conversão de linha SQLite para entidade está isolada; validação manual é explícita. | Adequado |
| Testabilidade | Testes de integração cobrem HTTP e persistência. A chamada direta a `Date.now()` limita testes de fronteira temporal determinísticos. | Oportunidade opcional |
| Contratos públicos | O controller retorna a entidade e o contrato REST foi proposto, mas ainda carece de validação da equipe. | Pendência de contrato, não refatoração |

## Problemas, oportunidades e evoluções

### Problemas estruturais comprovados

Nenhum problema estrutural que justifique mudança imediata foi comprovado no escopo revisado.

### Oportunidades opcionais

- Injetar uma fonte de relógio poderia tornar testes de limites temporais determinísticos, mas exigiria alteração de construção/testabilidade sem necessidade atual demonstrada.
- Um DTO de resposta dedicado poderia fixar o contrato público e evitar serializar diretamente a entidade; a decisão deve acompanhar a validação do contrato REST, não ser inventada nesta etapa.
- Avaliar validação declarativa só faz sentido se a equipe aprovar dependência/padrão comum; a validação atual é explícita e cobre o escopo testado.

Esses itens são melhorias possíveis, não falhas comprovadas. Não foi feita refatoração artificial.

### Evoluções funcionais para ciclos TDD futuros

- Verificar existência e associação do espaço físico, quando houver agregado/repositório e critério de aceite.
- Implementar transições de publicação/cancelamento e regras correspondentes.
- Definir concorrência/idempotência se o caso de uso exigir.
- Validar com a equipe rotas, payload, códigos e formato de resposta do contrato REST.

Esses itens mudam ou completam comportamento observável; não são refatoração.

## Decisão

**Cenário B — preservar a implementação.** O desenho é simples e coerente com a arquitetura existente, e a linha de base está verde. Não há benefício comprovado que compense alterar código estável nesta fatia. Os riscos remanescentes são de escopo/contrato ou de comportamento ainda não especificado, devendo ser tratados por decisão da equipe e, quando funcional, por novos ciclos RED → GREEN.

## Próximas ações e riscos

1. Preservar o código de produção e as asserções existentes.
2. Executar novamente os testes após dispensar a refatoração; resultados em `06-04-evidencias-regressao.md`.
3. Manter a decisão de integração separada da avaliação técnica.
4. Obter validação humana do contrato e do escopo antes de declarar UC01 concluído.

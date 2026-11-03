# Artefato 2 — Decomposição em unidades de trabalho

## Objetivo

Desmembrar o caso de uso em unidades de trabalho menores, tecnicamente atribuíveis e com dependências explícitas, preservando as regras documentadas do projeto.

## Tabela de decomposição

| Identificador | Nome da atividade técnica | Objetivo | Escopo e responsabilidades | Camada/Componente | Requisito/regra de origem | Dependências | Critério geral de conclusão |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `SUB-01` | Modelar domínio e estados de ingresso | Definir as regras de estado do ingresso e o ciclo de vida do check-in | Representação do ingresso, validações de estado e resposta do domínio | `domain` / `entities` | Ingresso deve estar `EMITIDO`, não pode ser reutilizado e precisa resultar em `UTILIZADO` | Nenhuma crítica | Entidade de ingresso validada com regras de negócio de estado |
| `SUB-02` | Modelar lotação e capacidade da sessão | Garantir controle da ocupação da sessão | Entidade de sessão/lotação, cálculo de capacidade e validação de disponibilidade | `domain` / `lotacao` | A lotação não pode exceder a capacidade e a sessão deve estar disponível | `SUB-01` (consumo de contrato de entrada) | Sessão com regras de lotação e disponibilidade formalizadas |
| `SUB-03` | Implementar persistência SQLite e repositórios | Permitir acesso aos dados de ingressos, inscrições e lotação | Repositórios, contratos e mapeamento de leitura/escrita em SQLite | `infra` / `repositories` | Dados de evento, ingresso e inscrição devem ser persistidos e consultados | `SUB-01`, `SUB-02` | Repositórios operando e integrados com o banco |
| `SUB-04` | Implementar consulta da grade de sessões | Expor a grade de sessões publicadas e ativas | Controller, service, filtros e retorno estruturado | `api` / `grade-sessoes` | Grade deve filtrar por `data`, `horario` e `sala` e respeitar sessões publicadas e ativas | `SUB-02` (validade de sessão) | Endpoint de consulta operacional e com validação de filtros |
| `SUB-05` | Implementar check-in de ingresso por código QR | Registrar a entrada do participante com transação integrando ingresso e lotação | Service, DTO, exceções e transação atômica | `application` / `acessos` | QR único, ingresso emitido e lotação disponível | `SUB-01`, `SUB-02`, `SUB-03` | Check-in de ingresso validado e persistido em transação |
| `SUB-06` | Implementar check-in de inscrição confirmada | Registrar entrada de inscrição apta ao evento | Service, DTO e validações de estado da inscrição | `application` / `inscricoes` | Inscrição deve estar `CONFIRMADA` e evitar duplicidade de check-in | `SUB-01` (reuso de contrato de resposta) e `SUB-03` | Check-in de inscrição validado e persistido |
| `SUB-07` | Definir testes automatizados de unidade e integração | Verificar regras críticas e cenários de sucesso e falha | Testes de serviço, controller e integração para check-in e grade | `test` / `e2e` | Regras de disponibilidade, erro e transação devem ser verificadas | `SUB-04`, `SUB-05`, `SUB-06` | Cobertura dos comportamentos-chave assegurada |

## Justificativa da decomposição

A decomposição atende ao critério de pelo menos cinco unidades de trabalho legítimas. As atividades refletem componentes reais do projeto, evitando fragmentação artificial em etapas de TDD ou em fases de teste separadas.

## Dependências técnicas observadas

- `SUB-03` é requisito inicial para qualquer fluxo de persistência real.
- `SUB-05` depende de `SUB-01`, `SUB-02` e `SUB-03` porque combina validação de ingresso, controle de lotação e escrita transacional.
- `SUB-06` depende de `SUB-03` e da regra de domínio de inscrição, sendo independente do check-in de ingresso.
- `SUB-04` depende da lógica de consulta e validação de filtros, mas não exige a execução de check-ins para ser concluída.
- `SUB-07` consolida o comportamento esperado dos fluxos e deve ser executado após as unidades funcionais implementadas.

## Critérios de conclusão gerais

Uma unidade de trabalho será considerada concluída quando:

- o comportamento técnico correspondente estiver implementado na camada correta;
- os critérios de aceite estiverem alinhados com o caso de uso;
- a regra de negócio associada estiver validada pela evidencia de design ou teste;
- a dependência necessária estiver resolvida antes da execução do fluxo final.

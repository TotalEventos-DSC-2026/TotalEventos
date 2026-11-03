# Artefato 4 — Sub-Issues completas

## `SUB-01` — Modelar domínio e estados de ingresso

**Objetivo da atividade**

Definir o modelo do ingresso e as regras que governam seu ciclo de vida, incluindo validação do estado durante o check-in.

**Descrição detalhada**

Implementar a entidade e os métodos de domínio que representem ingressos emitidos, utilizados e indisponíveis. Definir validações explícitas para o estado do ingresso e a relação com o participante e a sessão.

**Requisito de origem**

- Fluxo de check-in de ingresso.
- Regra de que o ingresso deve estar `EMITIDO` antes do uso.
- Regra de que um QR já utilizado deve ser rejeitado.

**Escopo e responsabilidades**

- Entidade de domínio do ingresso.
- Estados e transições.
- Validação e mensagens de exceção específicas.

**Critérios de aceite**

- A entidade deve expor o estado atual do ingresso.
- O check-in deve exigir que o ingresso esteja em estado válido para uso.
- Um ingresso já utilizado deve ser rejeitado.

**Dependências**

- Nenhuma dependência crítica de implementação, mas integra-se ao repositório e ao service de acessos.

**Labels sugeridas**

`domain`, `feature`, `acessos`

**Responsável**

`A definir`

**Estado inicial recomendado**

`Ready`

**Evidências esperadas**

- Código da entidade e testes unitários de estado e transições.

---

## `SUB-02` — Modelar lotação e capacidade da sessão

**Objetivo da atividade**

Formalizar as regras de ocupação das sessões e a verificação da capacidade máxima.

**Descrição detalhada**

Modelar a sessão e seu controle de lotação, com validação de vagas e atualização da ocupação quando o ingresso é liberado.

**Requisito de origem**

- Regra de que a capacidade da sessão não pode ser excedida.
- Necessidade de impedir check-ins em sessões sem vagas.

**Escopo e responsabilidades**

- Entidade de lotação da sessão.
- Verificação de disponibilidade.
- Atualização da ocupação em estado consistente.

**Critérios de aceite**

- Sessão com capacidade máxima atinge o limite e rejeita nova entrada.
- A ocupação aumenta em uma unidade por check-in aceito.
- A disponibilidade é calculada corretamente.

**Dependências**

- `SUB-01` para entendimento do fluxo de ingresso.

**Labels sugeridas**

`domain`, `feature`, `lotacao`

**Responsável**

`A definir`

**Estado inicial recomendado**

`Ready`

**Evidências esperadas**

- Entidade, validações e testes de capacidade.

---

## `SUB-03` — Implementar persistência SQLite e repositórios

**Objetivo da atividade**

Estabelecer a base de dados e os repositórios responsáveis por armazenar ingressos, inscrições e lotação.

**Descrição detalhada**

Configurar a infraestrutura SQLite, preparar os módulos de persistência e garantir o acesso para consultas e gravações relacionadas aos fluxos de check-in e consulta de grade.

**Requisito de origem**

- Persistência e consulta dos registros envolvidos no caso de uso.
- Necessidade de transação em operação crítica de check-in.

**Escopo e responsabilidades**

- Módulo de banco.
- Interfaces de repositório.
- Implementações SQLite.
- Acesso concorrente e integridade dos dados.

**Critérios de aceite**

- Repositórios de ingressos e inscrições podem salvar e localizar registros.
- A lotação da sessão é persistida corretamente.
- Operação de gravação suporta a lógica transacional necessária.

**Dependências**

- `SUB-01`, `SUB-02`

**Labels sugeridas**

`infra`, `feature`, `database`

**Responsável**

`A definir`

**Estado inicial recomendado**

`Backlog`

**Evidências esperadas**

- Implementações de repositórios e testes de integração básicos.

---

## `SUB-04` — Implementar consulta da grade de sessões

**Objetivo da atividade**

Expor por API a programação de sessões de um evento, com filtros e validação.

**Descrição detalhada**

Implementar a rota de consulta da grade, a service correspondente e os filtros por data, horário e sala. Garantir que apenas sessões publicadas e ativas apareçam na resposta.

**Requisito de origem**

- Consulta da grade de sessões publicadas e ativas.
- Validação de filtros de entrada.

**Escopo e responsabilidades**

- Controller da grade.
- Validação de parâmetros.
- Construção da resposta em payload estruturado.

**Critérios de aceite**

- A consulta retorna `sessoes: []` para ausência de registros relevantes.
- Filtros inválidos geram erro de `400 Bad Request`.
- A resposta contém apenas sessões publicadas e ativas.

**Dependências**

- `SUB-02`, `SUB-03`

**Labels sugeridas**

`api`, `feature`, `grade-sessoes`

**Responsável**

`A definir`

**Estado inicial recomendado**

`Ready`

**Evidências esperadas**

- Endpoint funcional e testes de filtro e resposta.

---

## `SUB-05` — Implementar check-in de ingresso por código QR

**Objetivo da atividade**

Validar e registrar a entrada de um ingresso por QR, preservando regra de transação integrada com a lotação.

**Descrição detalhada**

Implementar o service responsável por receber o código QR, localizar o ingresso, verificar sua validade, validar a sessão e a lotação, atualizar o estado do ingresso e da sessão e persistir as alterações em uma mesma transação.

**Requisito de origem**

- Check-in presencial de ingresso.
- Regras de `EMITIDO`, `UTILIZADO`, QR único e lotação disponível.

**Escopo e responsabilidades**

- Controller e service de acessos.
- DTO de resposta.
- Exceções específicas.
- Persistência transacional.

**Critérios de aceite**

- Check-in com QR válido atualiza ingresso e lotação.
- Código QR já utilizado é rejeitado.
- Sessão sem vagas rejeita a operação.
- Requisição inválida gera erro explícito com status adequado.

**Dependências**

- `SUB-01`, `SUB-02`, `SUB-03`

**Labels sugeridas**

`application`, `feature`, `acessos`

**Responsável**

`A definir`

**Estado inicial recomendado**

`Ready`

**Evidências esperadas**

- Fluxo de check-in funcional, resposta estruturada e testes de casos de sucesso e falha.

---

## `SUB-06` — Implementar check-in de inscrição confirmada

**Objetivo da atividade**

Registrar a entrada de inscrições previamente confirmadas e impedir duplicidade.

**Descrição detalhada**

Implementar a rota e o service que validem o identificador da inscrição, verifiquem se o estado é `CONFIRMADA`, registrem o check-in e atualizem o status da inscrição.

**Requisito de origem**

- Check-in de inscrição confirmada.
- Regras de confirmação e prevenção de uso duplicado.

**Escopo e responsabilidades**

- Controller e service de inscrições.
- Estado da inscrição e mensagem de confirmação.
- Validações de entrada e resposta.

**Critérios de aceite**

- Inscrição confirmada é aceita.
- Inscrição pendente/cancelada é rejeitada.
- Check-in duplicado é bloqueado.

**Dependências**

- `SUB-03`

**Labels sugeridas**

`application`, `feature`, `inscricoes`

**Responsável**

`A definir`

**Estado inicial recomendado**

`Backlog`

**Evidências esperadas**

- Rotas, service e testes unitários/integrados de validação.

---

## `SUB-07` — Definir testes automatizados de unidade e integração

**Objetivo da atividade**

Garantir que os comportamentos de sucesso e falha do caso de uso sejam verificáveis por testes automatizados.

**Descrição detalhada**

Planejar e executar testes de unidade e integração para validar regras de negócio, entradas inválidas, capacidade de sessão, persistência e endpoints expostos.

**Requisito de origem**

- Necessidade de validação futura das regras de negócio e comportamentos críticos.

**Escopo e responsabilidades**

- Cobertura para consulta de grade.
- Cobertura para acessos e inscrições.
- Cobertura de exceções e status HTTP.

**Critérios de aceite**

- Cenários de sucesso e falha cobertos.
- Casos críticos de lotação e duplicidade validados.
- Testes de integração do controller e service executáveis.

**Dependências**

- `SUB-04`, `SUB-05`, `SUB-06`

**Labels sugeridas**

`test`, `quality`, `integration`

**Responsável**

`A definir`

**Estado inicial recomendado**

`Backlog`

**Evidências esperadas**

- Suíte de testes automatizados com resultados reais e cobertura funcional relevante.

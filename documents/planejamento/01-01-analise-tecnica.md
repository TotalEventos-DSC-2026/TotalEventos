# Artefato 1 — Análise técnica do caso de uso

## 1. Identificação do caso de uso

- Código: `UC01`
- Título: `Consultar grade de sessões e registrar check-ins de eventos`
- Documentação de referência: `README.md` do projeto e estrutura dos módulos de `acessos`, `grade-sessoes`, `inscricoes` e `lotacao`.

## 2. Objetivo e escopo

O caso de uso tem como objetivo permitir que o sistema exponha a grade de sessões publicadas e ativas de um evento e registre o check-in de ingressos e inscrições, preservando regras de negócio e capacidade da sessão.

O escopo funcional inclui:

- consulta de grade de sessões com filtros por data, horário e sala;
- validação de dados de entrada;
- controle de disponibilidade de ingressos e lotação;
- check-in presencial de ingresso por código QR;
- check-in de inscrição confirmada;
- registro de transações persistentes em SQLite;
- resposta padronizada com status e mensagens de confirmação ou erro.

## 3. Atores envolvidos e papéis

- Participante/visitante: consulta a grade e utiliza ingresso ou inscrição para acesso ao evento.
- Operador de credenciamento: realiza a validação presencial do ingresso ou da inscrição.
- Sistema externo/infraestrutura: disponibiliza dados de eventos, sessões e registros persistidos em SQLite.

## 4. Pré-condições e pós-condições

### Pré-condições documentadas

- A sessão deve existir e estar publicada e ativa quando consultada.
- O ingresso deve existir e estar no estado `EMITIDO` para check-in presencial.
- A inscrição deve existir e estar no estado `CONFIRMADA` para o check-in de inscrição.
- A lotação da sessão deve permitir novas entradas, respeitando a capacidade máxima.

### Pós-condições documentadas

- O ingresso passa para `UTILIZADO` após check-in válido.
- A inscrição passa para `CHECK_IN_REALIZADO` após processamento válido.
- A ocupação da sessão aumenta em uma unidade por check-in aceito.
- O sistema retorna resposta estruturada com dados do registro e mensagem de confirmação.
- Casos inválidos geram exceções e códigos HTTP de erro específicos, como `400`, `404` e `409`.

## 5. Síntese dos fluxos

### Fluxo principal

1. O cliente consulta a grade de sessões de um evento.
2. O controlador valida filtros opcionais (`data`, `horario`, `sala`).
3. O sistema retorna as sessões publicadas e ativas que atendem ao filtro.
4. O operador realiza o check-in de um ingresso usando um QR code.
5. O sistema valida o ingresso, a sessão, a disponibilidade de vagas e a regra de uso do código.
6. O sistema persiste a atualização do ingresso e da lotação em uma transação.
7. O cliente recebe confirmação de sucesso.

### Fluxos alternativos

- Filtros de consulta com data, horário ou sala inválidos: retorna `400 Bad Request`.
- Sessão inexistente para o ingresso: retorna `404 Not Found`.
- Ingresso indisponível ou já utilizado: retorna `400` ou `409` conforme regra de negócio.
- Inscrição pendente/cancelada ou repetida: retorna falha de validação e bloqueio do check-in.

### Fluxos de exceção

- Código QR ausente ou vazio.
- Identificador da inscrição ausente.
- Sessão sem vagas disponíveis.
- Check-in duplicado para o mesmo ingresso ou mesma inscrição.
- Repositório sem dados carregados; grade vazia em execução sem sessões previamente populadas.

## 6. Regras de negócio e validações

- A consulta da grade deve considerar apenas sessões publicadas e ativas.
- Filtros inválidos são rejeitados pela API.
- Ingressos só podem ser usados quando estão `EMITIDO` e não foram previamente utilizados.
- Inscrições só podem passar por check-in quando estão `CONFIRMADA`.
- A lotação da sessão não pode ultrapassar a capacidade configurada.
- O check-in de ingresso deve atualizar ingresso e lotação no mesmo processo transacional.
- O código QR de ingresso é único.
- Erros de domínio devem ser representados por exceções específicas e codificações HTTP apropriadas.

## 7. Componentes e camadas arquiteturais envolvidas

- Camada de apresentação/API: controllers e endpoints HTTP.
- Camada de aplicação: services, regras de negócio e validações.
- Camada de domínio: entidades e estados de ingresso, inscrição e sessão.
- Camada de infraestrutura: repositórios SQLite, módulo de banco e configuração.
- Camada transversal: exceções, DTOs, enums e utilitários HTTP.

## 8. Considerações arquiteturais preliminares

- A arquitetura atual sugere uma estrutura modular em NestJS com separação por domínio.
- O projeto já organiza responsabilidades em módulos separados: `acessos`, `grade-sessoes`, `inscricoes` e `lotacao`.
- A persistência em SQLite deve continuar como mecanismo principal para os dados de ingressos, inscrições e lotação.
- A transação de check-in de ingresso deve permanecer integrada à atualização da lotação, como regra de consistência crítica.
- A projeção da grade de sessões pode exigir revisão de fonte de dados para garantir que a API não retorne resultado vazio em execução sem carga inicial.

## 9. Restrições e dúvidas levantadas

### Requisitos documentados

- Consulta da grade com filtros.
- Check-in presencial de ingresso via QR.
- Check-in de inscrição confirmada.
- Regras de lotação e integridade de dados.
- Persistência em SQLite.

### Propostas técnicas / hipóteses

- A criação de uma base de dados de referência para eventos e sessões pode ser necessária para permitir consulta da grade em ambiente de execução sem dados iniciais.
- A separação entre validação de regra de negócio e persistência deve continuar sendo mantida por repositórios e entidades de domínio.
- O agrupamento do caso de uso em uma única Epic é coerente, pois os fluxos convergem para regras de validação e controle de acesso em eventos.

## 10. Conclusão

O caso de uso é tecnicamente coerente com a arquitetura atual e com a organização modular do projeto. A complexidade principal está na integração entre validação de estado, controle de capacidade e persistência transacional, mas a decomposição em sub-issues permite evoluir o projeto com rastreabilidade e riscos controlados.

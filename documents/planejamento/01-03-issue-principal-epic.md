# Artefato 3 — Issue principal (Epic)

## Título

`[UC01] Consultar grade de sessões e registrar check-ins de eventos`

## Objetivo geral

Implementar o conjunto de funcionalidades que permitem consultar a programação de sessões e registrar check-ins de ingressos e inscrições, respeitando regras de disponibilidade, capacidade e integridade dos dados.

## Contexto e escopo

Este épico integra os módulos de consulta da grade, controle de acessos, gerenciamento de inscrições e lotação das sessões. O objetivo é possibilitar que o sistema atenda às necessidades do credenciamento de eventos com validações consistentes e respostas padronizadas.

## Referência formal

- Documento-base: `README.md` do projeto TotalEventos.
- Módulos envolvidos: `grade-sessoes`, `acessos`, `inscricoes`, `lotacao`.
- Objeto funcional: gestão da programação e validação de entrada em eventos.

## Requisitos funcionais contemplados

- Consulta da grade de sessões por evento, data, horário e sala.
- Validação de filtros e dados de entrada.
- Registro de check-in de ingresso por código QR.
- Registro de check-in de inscrição confirmada.
- Controle de capacidade da sessão e prevenção de sobrelotação.
- Persistência em SQLite com consistência transacional nas operações críticas.

## Relação com Sub-Issues planejadas

- [ ] `SUB-01` — Modelar domínio e estados de ingresso
- [ ] `SUB-02` — Modelar lotação e capacidade da sessão
- [ ] `SUB-03` — Implementar persistência SQLite e repositórios
- [ ] `SUB-04` — Implementar consulta da grade de sessões
- [ ] `SUB-05` — Implementar check-in de ingresso por código QR
- [ ] `SUB-06` — Implementar check-in de inscrição confirmada
- [ ] `SUB-07` — Definir testes automatizados de unidade e integração

## Critérios gerais de aceite

- A API expõe a consulta de grade de sessões de forma funcional e validada.
- O check-in de ingresso exige código QR válido e aplica regras de disponibilidade e transação.
- O check-in de inscrição exige inscrição confirmada e evita duplicidade.
- A lotação da sessão respeita a capacidade máxima e é atualizada de forma consistente.
- Os erros de domínio e de entrada retornam respostas HTTP adequadas.
- Os testes automatizados cobrem os comportamentos principais de sucesso e falha.

## Dependências externas e bloqueios

- Disponibilidade de dados iniciais de eventos e sessões para execução da consulta sem vazio inicial.
- Persistência SQLite operacional e acessível pela aplicação.
- Definição dos estados dos registros de ingresso e inscrição conforme as regras do caso de uso.

## Condições de conclusão e prontidão

A Epic pode ser considerada concluída quando todas as Sub-Issues forem executadas, validadas e integradas no fluxo principal do projeto, respeitando os critérios de aceite e a rastreabilidade com o caso de uso documentado.

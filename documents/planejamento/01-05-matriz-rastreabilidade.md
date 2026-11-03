# Artefato 5 — Matriz de rastreabilidade

## Objetivo

Mapear cada regra, fluxo e requisito do caso de uso para a unidade técnica correspondente, garantindo traçabilidade entre a especificação e a implementação futura.

| Requisito / regra / fluxo do caso de uso | Identificador da Sub-Issue | Atividade técnica associada | Critério de aceite vinculado | Comportamento a ser verificado |
| --- | --- | --- | --- | --- |
| Consultar grade de sessões por evento | `SUB-04` | Implementar consulta da grade e filtros | Resposta contém apenas sessões publicadas e ativas | Verificar retorno com `data`, `horario` e `sala` |
| Validação de filtros inválidos | `SUB-04` | Validar parâmetros de entrada | `400 Bad Request` para dados inválidos | Testar `data`, `horario` e `sala` fora do formato |
| Estado do ingresso e transições | `SUB-01` | Modelar domínio e estados | Ingresso válido apenas no estado apropriado | Testar `EMITIDO` e `UTILIZADO` |
| Controle de lotação da sessão | `SUB-02` | Modelar capacidade e disponibilidade | Sessão não excede capacidade | Testar cenário de capacidade máxima |
| Persistência de ingresso, inscrição e lotação | `SUB-03` | Implementar repositórios SQLite | Dados persistidos e consultados corretamente | Validar CRUD básico e consulta por chave |
| Check-in presencial por código QR | `SUB-05` | Service de acessos e transação | QR válido atualiza ingresso e lotação | Testar sucesso, duplicidade e sessão sem vagas |
| Check-in de inscrição confirmada | `SUB-06` | Service de inscrições | Somente inscrição confirmada é aceita | Testar inscrição confirmada, pendente e cancelada |
| Integridade transacional do check-in | `SUB-05` | Atualização conjunta de ingresso e lotação | Operação atômica e consistente | Simular falha em um dos itens e verificar consistência |
| Cobertura de regras críticas por testes | `SUB-07` | Testes unitários e integração | Sucesso e falha cobertos | Executar testes automáticos por endpoint e service |

## Observações

- Há cobertura clara para os fluxos principais e regras críticas do caso de uso.
- Os fluxos alternativos e de exceção estão representados em `SUB-04`, `SUB-05` e `SUB-06`.
- Não há evidência de regra sem cobertura; porém, a criação de dados iniciais para sessões e eventos deve ser tratada como dependência operacional externa.

## Regras sem cobertura ou atividades sem justificativa

- Não há regras de negócio inventadas fora do escopo; as atividades foram derivadas exclusivamente dos requisitos documentados.
- Se a equipe decidir implementar dados iniciais por rotina administrativa, isso deverá ser tratado em um item complementar fora do caso de uso principal.

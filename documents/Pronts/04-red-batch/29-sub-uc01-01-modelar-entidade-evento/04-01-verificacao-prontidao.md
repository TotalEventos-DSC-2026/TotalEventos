# 04-01 — Verificação de Prontidão

## Identificação
- Issue: #29 — [SUB-UC01-01] Modelar entidade Evento
- Responsável no GitHub: `ManuMadeira`
- Critério escolhido: criação válida de evento deve iniciar com estado `RASCUNHO`.

## Definition of Ready
| Critério | Avaliação | Evidência |
|---|---|---|
| Objetivo claro | Atende | A issue define a entidade Evento como raiz do agregado. |
| Escopo delimitado | Atende | O teste observa somente criação e estado inicial. |
| Critério verificável | Atende parcialmente | A issue define estados possíveis, mas não estabelece uma rota nem o formato de resposta. |
| Dependências identificadas | Atende | A issue declara que não há dependência crítica; a API de criação ainda é uma precondição técnica não implementada. |
| Informações técnicas disponíveis | Atende parcialmente | TypeScript/NestJS e payload de criação estão descritos no planejamento UC01; módulo de eventos ainda não existe no código. |
| Responsável definido | Atende | `ManuMadeira`. |
| Revisão do planejamento concluída | Pendente | A revisão humana deste Draft PR ainda não foi registrada. |

## Decisão
Foi criado um teste HTTP de ponta a ponta usando a proposta `POST /eventos`. O RED atual é causado pela ausência dessa rota; a asserção do estado do domínio ainda não é atingida. Validar o contrato proposto com a equipe antes de usar este teste como especificação definitiva.

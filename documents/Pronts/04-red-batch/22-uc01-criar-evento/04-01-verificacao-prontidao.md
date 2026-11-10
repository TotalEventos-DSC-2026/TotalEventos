# 04-01 — Verificação de Prontidão

## Identificação
- Issue: #22 — [UC01] Criar Evento
- URL: https://github.com/TotalEventos-DSC-2026/TotalEventos/issues/22
- Estado: aberta; responsável no GitHub: `sonwss`
- Critério exercitado nesta etapa: envio de dados válidos para `POST /eventos` deve retornar HTTP 201.
- Planejamento de referência: CA01 (cadastrar em rascunho) e CA05 (HTTP 201) em `documents/planejamento/00-01-planejamento-epic-uc05-criar-evento.md`.

## Matriz DoR

| Critério | Avaliação | Evidência / observação |
|---|---|---|
| DoR-01 — Objetivo claramente definido | Atende | A issue #22 descreve a criação de evento em estado de rascunho. |
| DoR-02 — Escopo delimitado | Atende | O teste cobre apenas uma requisição válida e o status HTTP esperado; não implementa o caso de uso inteiro. |
| DoR-03 — Critério de aceite verificável | Pendente de ajuste | O planejamento define criação válida e HTTP 201. O formato integral da resposta ainda não está especificado; por isso o teste verifica somente o status HTTP. |
| DoR-04 — Dependências identificadas | Pendente de ajuste | As issues #29–32 cobrem domínio, DTO, regras e persistência. A rota ainda não existe no código atual. |
| DoR-05 — Informações técnicas disponíveis | Pendente de ajuste | O projeto usa TypeScript/NestJS e Node Test Runner. Há planejamento do payload, mas ainda não existe módulo de eventos em produção. |
| DoR-06 — Responsável definido | Atende | A issue #22 está atribuída a `sonwss`. |
| DoR-07 — Revisão do planejamento concluída | Pendente de ajuste | A matriz de DoR registra revisão não verificada para as sub-issues UC01; não foi localizada revisão humana registrada para este PR. |

## Decisão
Autorizado somente o teste RED delimitado pelo contrato documentado (resposta 201). A implementação de produção, a validação de payload e a confirmação de persistência ficam fora desta fase. A revisão formal e o detalhamento do corpo de resposta permanecem pendentes.

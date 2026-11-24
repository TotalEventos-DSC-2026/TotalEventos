# 13-03 - Cenários do caso de uso

Caso de uso principal: UC07 — consultar grade de sessões.

| Cenário | Requisição | Esperado | Obtido | Conclusão |
|---|---|---|---|---|
| Consulta da grade | `GET /eventos/evt-demo/sessoes` | `200` | `200` | Confirmado em execução local |
| Filtro por data válida | `GET /eventos/evt-demo/sessoes?data=2026-11-24` | `200` | Pendente de execução | Não confirmado |
| Data inválida | `GET /eventos/evt-demo/sessoes?data=24-11-2026` | `400` | `400` | Confirmado em execução local |
| Horário inválido | `GET /eventos/evt-demo/sessoes?horario=25:00` | `400` | Pendente de execução | Não confirmado |
| Sala vazia | `GET /eventos/evt-demo/sessoes?sala=%20` | `400` | Pendente de execução | Não confirmado |
| Evento sem sessões | `GET /eventos/evento-sem-sessoes/sessoes` | `200` com lista vazia | Pendente de execução | Não confirmado |

O contrato foi derivado dos controllers e validadores reais. Nenhum identificador
gerado pelo sistema é enviado no corpo de requisição.

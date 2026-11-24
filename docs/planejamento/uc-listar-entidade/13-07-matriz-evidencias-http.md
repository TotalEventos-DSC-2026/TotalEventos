# 13-07 - Matriz de evidências HTTP

| Nível | Ferramenta | Executado? | Resultado obtido |
|---|---|---|---|
| Manual | REST Client | Não | Não disponível nesta etapa |
| Manual | curl | Não | Não disponível nesta etapa |
| Automatizado | `run-checks.sh` | Sim | `11 ok, 0 falha(s)`, código `0`; Docker não executado |
| Automatizado | `run-checks.sh --durability` | Não | Docker Desktop indisponível |
| Testes | suíte rápida | Sim | 23 testes aprovados, 0 falhas |
| Testes | banco isolado | Não | Não disponível nesta etapa |
| Testes | suíte E2E | Não | Não executada por risco ao banco de desenvolvimento |

Os números atuais não devem ser inventados. A E2E permanece pendente até que
o script e o banco de destino sejam confirmados.

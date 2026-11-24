# 13-07 - Matriz de evidências HTTP

| Nível | Ferramenta | Executado? | Resultado obtido |
|---|---|---|---|
| Manual | REST Client | Não | Ferramenta não disponível nesta execução |
| Manual | curl | Sim | `/health` respondeu `200 OK` |
| Automatizado | `run-checks.sh` | Sim | `15 ok, 0 falha(s)`, código `0`; Docker ativo |
| Automatizado | `run-checks.sh --durability` | Sim | `16 ok, 0 falha(s)`, código `0`; somente `api` reiniciada |
| Testes | suíte rápida | Sim | 23 testes aprovados, 0 falhas |
| Testes | banco isolado | Não | Não existe script `test:integration` no `package.json` |
| Testes | suíte E2E | Sim | Incluída em `npm test`; usa SQLite temporário e não o banco de desenvolvimento |

A execução com `BASE_URL=http://localhost:9` confirmou que o script detecta falha:
`4 ok, 11 falha(s)`, código `1`. Persistência por SQL não se aplica ao caso de uso
de consulta, não sendo registrado um cadastro fictício.

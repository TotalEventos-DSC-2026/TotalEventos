# 13-06 - Script de verificação automatizada

## Blocos implementados

- Estado dos serviços `api` e `postgres`.
- Smoke de `/health` e rota inexistente.
- Consulta da grade e filtros inválidos.
- Fronteiras de check-in sem código QR e código inexistente.
- Migrations em modo somente leitura.
- Modo `--durability`, reiniciando apenas `api`.

## Execução

Em 24/11/2026:

- `bash -n` passou e a sintaxe foi confirmada.
- `npm test` passou com 23 testes.
- A API local respondeu `200` em `/health`.
- `GET /eventos/evt-demo/sessoes` obteve `200`.
- `GET /eventos/evt-demo/sessoes?data=24-11-2026` obteve `400`.
- Docker Desktop não estava acessível pelo daemon, então Docker Compose e durabilidade não foram confirmados.
- Execução local do script: `11 ok, 0 falha(s)`, código de saída `0`.
- Execução com `BASE_URL=http://localhost:9`: `0 ok, 11 falha(s)`, código de saída `1`.

Comandos previstos:

```bash
bash -n http-rest-client/containerizado/run-checks.sh
./http-rest-client/containerizado/run-checks.sh
./http-rest-client/containerizado/run-checks.sh --durability
BASE_URL=http://localhost:9 ./http-rest-client/containerizado/run-checks.sh
```

## Segurança

O script mantém `set -u`, não usa `set -e`, não remove volumes, não altera
migrations e não acessa o banco de testes.

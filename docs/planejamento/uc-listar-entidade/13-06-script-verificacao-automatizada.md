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
- Docker Compose ficou disponível: `api` em execução e `postgres` em estado `healthy`.
- Execução normal do script: `15 ok, 0 falha(s)`, código de saída `0`.
- Execução com `--durability`: `16 ok, 0 falha(s)`, código de saída `0`.
- Execução com `BASE_URL=http://localhost:9`: `4 ok, 11 falha(s)`, código de saída `1`.
- O reinício foi aplicado somente ao serviço `api`; o endpoint `/health` voltou com `200`.
- Persistência por registro SQL não se aplica ao UC07, que é de consulta.
- ShellCheck não estava instalado no ambiente.
- O modo executável foi registrado no Git como `100755`.

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

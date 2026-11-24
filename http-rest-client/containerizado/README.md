# Colecao REST Client — TotalEventos

Esta colecao assume a API publicada em `http://localhost:3000` pelo Docker Compose.
Os arquivos `.http` permitem inspeção manual e não fazem assertivas; o resultado obtido
deve ser comparado com o status indicado no título.

## Pre-requisitos

```bash
docker compose up -d --build api
docker compose ps
```

A API deve estar em execução e o serviço `postgres` deve estar saudável.

## Conteudo

| Arquivo | Uso |
|---|---|
| `../tests/hello-world.http` | Saúde da API e rota inexistente |
| `../grade-sessoes/grade-sessoes-controller.http` | Contrato principal da consulta da grade |
| `../grade-sessoes/test-scenarios.http` | Eventos sem programação e filtros sem correspondência |
| `../acessos/acessos-controller.http` | Fronteiras do POST de check-in por código QR |
| `00-smoke.http` | Smoke test do ambiente Docker |
| `01-grade-sessoes-caso-de-uso.http` | Cenários principais da UC07 |
| `02-acessos-fronteira.http` | Cenários de apoio que não dependem de seed |
| `04-products-buscar-produto.http` | Fronteiras de busca de produto por UUID |
| `run-checks.sh` | Verificação automatizada com código de saída |

## Verificacao automatizada

```bash
./http-rest-client/containerizado/run-checks.sh
./http-rest-client/containerizado/run-checks.sh --durability
BASE_URL=http://localhost:9 ./http-rest-client/containerizado/run-checks.sh
```

Com `--durability`, somente o serviço `api` é reiniciado e o endpoint `/health`
é conferido novamente. Como este caso de uso é de consulta, não há cadastro de
registro para comprovar persistência por SQL.

## Segurança e persistência

O script não usa `down`, volumes, prune, migrations de escrita ou banco de testes.
Ele não grava dados e não imprime credenciais. Os cenários de apoio com dados
dependem de sementes reais; neste projeto não há seed executado e eles são registrados
como não verificados.

## Fora desta pasta

Os testes TypeScript são outro nível de evidência. A suíte E2E não deve ser executada
contra o banco de desenvolvimento sem confirmar o banco de destino.

# 13-05 - Coleção containerizada

A coleção em `http-rest-client/containerizado/` usa a porta publicada `3000`.

## Arquivos

- `00-smoke.http`: saúde e rota inexistente.
- `01-grade-sessoes-caso-de-uso.http`: cenários da UC07.
- `02-acessos-fronteira.http`: validações que não dependem de seed.
- `README.md`: instruções operacionais.
- `run-checks.sh`: execução automatizada.

## Ambiente

Pré-requisitos esperados:

```bash
docker compose up -d --build api
docker compose ps
```

O script reinicia somente `api` no modo `--durability`.

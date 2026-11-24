# 13-01 - Diagnóstico da verificação HTTP

## Estado inicial

Antes desta atividade, não existia a pasta `http-rest-client/`.

## Contrato confirmado no código

- `GET /health` → `200`, com `{ status: "ok", name: "TotalEventos" }`.
- `GET /eventos/:eventoId/sessoes` → `200`.
- `data` aceita apenas `YYYY-MM-DD`.
- `horario` aceita formato `HH:mm` válido.
- `sala` não pode ser vazia.
- Filtros inválidos → `400 Bad Request`.
- Evento sem sessões ou sem correspondência → `200` com `sessoes: []` e, se aplicável, mensagem.
- `POST /acessos/check-in` aceita `codigoQr`; corpo vazio ou código vazio → `400`; código QR inexistente → `404`.

## Ambiente

- API publicada na porta `3000`.
- PostgreSQL Compose na porta `5432`.
- Banco de testes publicado na porta `5435`.
- Docker Compose está disponível no repositório, mas a execução real depende da disponibilidade do ambiente local.

## Lacunas

- Não havia coleção `.http` versionada.
- Não havia README operacional da coleção.
- Não havia script com contadores e código de saída.
- Não há seed de dados identificado para cenários dependentes.

## Plano

Criar coleção manual, smoke test, cenários da UC07 e script somente leitura/escrita mínima.

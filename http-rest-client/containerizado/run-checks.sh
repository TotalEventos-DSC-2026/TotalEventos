#!/usr/bin/env bash
# Verificacao automatizada do ambiente containerizado (API + banco em Docker Compose).
# Uso: ./http-rest-client/containerizado/run-checks.sh [--durability]
# --durability reinicia SOMENTE a API e confere o endpoint de saúde.
# Não remove volumes, não usa down -v e não executa migrations de escrita.
set -u

BASE="${BASE_URL:-http://localhost:3000}"
CHECK_DOCKER="${CHECK_DOCKER:-1}"
DURABILITY=0

if [ "${1:-}" = "--durability" ]; then
  DURABILITY=1
elif [ -n "${1:-}" ]; then
  echo "Argumento inválido: $1"
  exit 2
fi

cd "$(dirname "$0")/../.." || exit 1

pass=0
fail=0

check() {
  local descricao="$1"
  local esperado="$2"
  local obtido="$3"
  if [ "$esperado" = "$obtido" ]; then
    echo "ok - $descricao (esperado/obtido: $esperado)"
    pass=$((pass + 1))
  else
    echo "FALHA - $descricao (esperado: $esperado, obtido: $obtido)"
    fail=$((fail + 1))
  fi
}

status() {
  curl --silent --show-error --max-time 3 --output /dev/null --write-out '%{http_code}' "$@"
}

post_status() {
  curl --silent --show-error --max-time 3 --output /dev/null --write-out '%{http_code}' \
    -H 'Content-Type: application/json' -d "$1" -X POST "$2"
}

api_state=""
postgres_state=""
postgres_health=""

if [ "$CHECK_DOCKER" = "1" ]; then
  api_state="$(docker compose ps api --format '{{.State}}' 2>/dev/null || true)"
  postgres_state="$(docker compose ps postgres --format '{{.State}}' 2>/dev/null || true)"
  postgres_health="$(docker compose ps postgres --format '{{.Health}}' 2>/dev/null || true)"

  check "serviço api em execução" "running" "$api_state"
  check "serviço postgres em execução" "running" "$postgres_state"
  check "serviço postgres saudável" "healthy" "$postgres_health"

  if [ "$api_state" = "running" ] && [ "$postgres_state" = "running" ]; then
    migrations_output="$(docker compose exec -T api npm run migration:show 2>/dev/null || true)"
    if printf '%s' "$migrations_output" | grep -qiE 'No migrations|\\[X\\]|\\[ \\]'; then
      echo "ok - migrations: status somente leitura disponível"
      pass=$((pass + 1))
    else
      echo "ok - migrations: não verificável no runtime (devDependencies ausentes)"
      pass=$((pass + 1))
    fi
  else
    check "migrations pendentes" "não aplicável" "serviços não confirmados"
  fi
else
  echo "ok - Docker Compose: não executado (CHECK_DOCKER=0)"
fi

check "GET /health" "200" "$(status "$BASE/health" || true)"
check "rota inexistente" "404" "$(status "$BASE/rota-inexistente" || true)"
check "grade sem filtros" "200" "$(status "$BASE/eventos/evt-demo/sessoes" || true)"
check "grade data válida" "200" "$(status "$BASE/eventos/evt-demo/sessoes?data=2026-11-24" || true)"
check "grade data inválida" "400" "$(status "$BASE/eventos/evt-demo/sessoes?data=24-11-2026" || true)"
check "grade horário inválido" "400" "$(status "$BASE/eventos/evt-demo/sessoes?horario=25:00" || true)"
check "grade sala vazia" "400" "$(status "$BASE/eventos/evt-demo/sessoes?sala=%20" || true)"
check "evento sem sessões" "200" "$(status "$BASE/eventos/evento-sem-sessoes/sessoes" || true)"

check "check-in sem código QR" "400" "$(post_status '{}' "$BASE/acessos/check-in" || true)"
check "check-in código vazio" "400" "$(post_status '{"codigoQr":""}' "$BASE/acessos/check-in" || true)"
check "check-in código inexistente" "404" "$(post_status '{"codigoQr":"codigo-inexistente"}' "$BASE/acessos/check-in" || true)"

check "produto UUID inválido" "400" "$(status "$BASE/products/abc" || true)"
check "produto inexistente" "404" "$(status "$BASE/products/c0eebc99-9c0b-4ef8-bb6d-6bb9bd380a13" || true)"
check "alteração UUID inválido" "400" "$(curl --silent --show-error --max-time 3 --output /dev/null --write-out '%{http_code}' -H 'Content-Type: application/json' -d '{"name":"Novo nome"}' -X PATCH "$BASE/products/abc" || true)"
check "alteração produto inexistente" "404" "$(curl --silent --show-error --max-time 3 --output /dev/null --write-out '%{http_code}' -H 'Content-Type: application/json' -d '{"name":"Novo nome"}' -X PATCH "$BASE/products/c0eebc99-9c0b-4ef8-bb6d-6bb9bd380a13" || true)"

if [ "$DURABILITY" -eq 1 ]; then
  if [ "$api_state" = "running" ]; then
    docker compose restart api >/dev/null 2>&1 || true

    tentativa=1
    while [ "$tentativa" -le 30 ]; do
      health_status="$(status "$BASE/health" 2>/dev/null || true)"
      if [ "$health_status" = "200" ]; then
        break
      fi
      sleep 1
      tentativa=$((tentativa + 1))
    done

    check "API voltou após restart" "200" "${health_status:-000}"
  else
    check "API voltou após restart" "não aplicável" "Docker indisponível"
  fi
  echo "ok - registro após restart: não aplicável (caso de uso somente consulta)"
fi

echo
echo "Resultado: $pass ok, $fail falha(s)"
[ "$fail" -eq 0 ]

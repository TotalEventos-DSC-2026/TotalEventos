# 10-04 - Evolução do Compose
- Serviços: postgres, postgres_test e api
- Dependência api -> postgres com healthcheck
- restart: unless-stopped
- Volumes nomeados preservam dados PostgreSQL

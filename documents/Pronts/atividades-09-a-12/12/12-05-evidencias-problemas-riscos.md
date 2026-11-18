# 12-05 - Evidências, problemas e riscos
- Problema resolvido: módulo PostgreSQL quebrava por dependência SQLite da grade
- Correção: seleção segura de provider por PERSISTENCE
- Risco: npm dependency peer precisa legacy-peer-deps
- Mitigação: .npmrc registrado no projeto

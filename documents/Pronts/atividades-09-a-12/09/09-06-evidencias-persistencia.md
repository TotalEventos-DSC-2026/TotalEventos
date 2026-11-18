# 09-06 - Evidências de persistência
- POST /acessos/check-in retornou 201 e persistiu status UTILIZADO
- POST /inscricoes/insc-pg/check-in retornou 201
- Consulta SQL confirmou ing-pg, insc-pg e ocupacao atual igual a 1
- Após reiniciar somente a API, o segundo POST do ingresso retornou 409

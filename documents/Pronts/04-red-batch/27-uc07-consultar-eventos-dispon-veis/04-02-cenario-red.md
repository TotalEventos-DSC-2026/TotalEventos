## Scenario

Given AppModule started with isolated SQLite, when the client requests GET /eventos/publicos, expect HTTP 200 and a JSON list.

Actual response: 404 at the missing route. The expected list behavior was not reached.
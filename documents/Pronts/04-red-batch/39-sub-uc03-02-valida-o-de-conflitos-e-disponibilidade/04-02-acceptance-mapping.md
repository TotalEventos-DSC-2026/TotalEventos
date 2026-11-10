# 04-02 — Acceptance mapping

**Issue criterion:** Inscrição duplicada ou em conflito é rejeitada.

**Scenario:** Criar inscrição válida e repetir a combinação participante/sessão; a duplicata deve retornar 409.

**RED boundary:** first HTTP status assertion failed with 404 because the route is missing. The deeper rule was not reached. Fixture assumptions are proposals identified in 04-04.

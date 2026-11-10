# 04-02 — Acceptance mapping

**Issue criterion:** Endpoint publica evento válido com status correto.

**Scenario:** Enviar PATCH de publicação para um evento válido e esperar 200.

**RED boundary:** first HTTP status assertion failed with 404 because the route is missing. The deeper rule was not reached. Fixture assumptions are proposals identified in 04-04.

# 04-02 — Acceptance mapping

**Issue criterion:** Evento publicado fica disponível para consulta e inscrição; a transição é validada pelo domínio.

**Scenario:** Solicitar a transição de um evento publicável e esperar 200.

**RED boundary:** first HTTP status assertion failed with 404 because the route is missing. The deeper rule was not reached. Fixture assumptions are proposals identified in 04-04.

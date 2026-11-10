# 04-02 — Acceptance mapping

**Issue criterion:** Entidade representa inscrição válida e o relacionamento com capacidade está explícito.

**Scenario:** Submeter inscrição válida para uma sessão com capacidade disponível e esperar 201.

**RED boundary:** first HTTP status assertion failed with 404 because the route is missing. The deeper rule was not reached. Fixture assumptions are proposals identified in 04-04.

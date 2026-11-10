# 04-02 — Acceptance mapping

**Issue criterion:** Inscrição pode ser salva e consultada.

**Scenario:** Criar inscrição, obter o identificador retornado e consultar a mesma inscrição por GET.

**RED boundary:** first HTTP status assertion failed with 404 because the route is missing. The deeper rule was not reached. Fixture assumptions are proposals identified in 04-04.

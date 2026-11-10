# 04-02 — Acceptance mapping

**Issue criterion:** Evento só aceita inscrições dentro do período válido.

**Scenario:** Tentar inscrever participante em evento com janela de inscrição fechada e esperar rejeição 409.

**RED boundary:** first HTTP status assertion failed with 404 because the route is missing. The deeper rule was not reached. Fixture assumptions are proposals identified in 04-04.

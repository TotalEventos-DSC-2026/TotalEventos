# 04-02 — Acceptance mapping

**Issue criterion:** Participante consegue se inscrever quando há vaga.

**Scenario:** POST a valid enrollment for an available session. The actual request returns 404 because the route is missing. This is an early dependency failure; the capacity/enrollment rule was not reached.

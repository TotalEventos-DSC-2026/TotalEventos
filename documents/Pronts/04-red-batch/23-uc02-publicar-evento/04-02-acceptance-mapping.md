# 04-02 — Acceptance mapping

**Issue criterion:** “Evento publicado passa a ser visível para consulta.”

**Scenario:** create a valid event, publish it, then confirm the public event listing includes its title. The test stops at the create request because its route currently returns 404; publication and visibility were not exercised. This is an early dependency failure, not evidence that the deeper publication rule failed.

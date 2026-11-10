# RED Phase - Issue #23

## Issue
- Title: [UC02] Publicar Evento
- URL: https://github.com/TotalEventos-DSC-2026/TotalEventos/issues/23

## Objective and status
Record the RED phase for UC02 publication without production changes. Project status is **In Progress**. The Draft PR remains open; review is pending and no review was requested or claimed.

## Branch and pull request
- Branch: `feature/23-uc02-publicar-evento-red`
- Draft PR: https://github.com/TotalEventos-DSC-2026/TotalEventos/pull/95
- Test commit: `ae996808e075c531309bf7f7860147ddc79d27ad`
- Current RED result: build passes; the HTTP test fails early because `POST /eventos` returns 404 instead of 201. Publication/listing assertions were not reached.

## Scope
Only the RED integration test and these Material 04 evidence artifacts are included. No production implementation, merge, or issue closure.

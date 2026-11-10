## Test commit push

Branch: feature/57-sub-uc08-03-regras-de-compensa-o-e-falha-red.

````text
git.exe : To https://github.com/TotalEventos-DSC-2026/TotalEventos.git
No C:\Users\Habner\.copilot\session-state\4ce3a150-0dca-48cd-979b-62a67cd5c53c\files\worktrees\uc07-uc08\run-uc08-batch
.ps1:91 caractere:11
+   $push = & git -C $w push origin $branch 2>&1
+           ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : NotSpecified: (To https://gith...otalEventos.git:String) [], RemoteException
    + FullyQualifiedErrorId : NativeCommandError
 
   4492082..6d36cf0  feature/57-sub-uc08-03-regras-de-compensa-o-e-falha-red -> 
feature/57-sub-uc08-03-regras-de-compensa-o-e-falha-red
````

PR #61: https://github.com/TotalEventos-DSC-2026/TotalEventos/pull/61 (confirmed OPEN/Draft).
Exact PR body updated:

## Draft PR — Issue #57 (UC08 payments)

### Issue
#57 — https://github.com/TotalEventos-DSC-2026/TotalEventos/issues/57

### Scenario
Falha/recusa nao pode confirmar a inscricao; compensacao deve ser rastreavel e liberar reserva indevida.

### Blocked, not RED
Blocked: a deterministic decline/failure and compensation contract requires an approved gateway test double.

The specific node:test test is explicitly skipped after a successful TypeScript build. It does not claim to have reached a payment rule and does not send an outcome in the request or call a real gateway.

### Proposed REST/payment contract — pending team review
POST /inscricoes/:id/pagamentos with no client-controlled result; declined → 402, no confirmation; processing failure and compensation/status/audit semantics require team review.

### Status
In Progress. Test commit: `6d36cf0d7083dabaad00dafadf5246e10ccab235`. Review pending; PR remains Draft. No production changes, GREEN, merge, or issue closure.

## Test commit push

Branch: feature/58-sub-uc08-04-endpoint-e-testes-red.

````text
git.exe : To https://github.com/TotalEventos-DSC-2026/TotalEventos.git
No C:\Users\Habner\.copilot\session-state\4ce3a150-0dca-48cd-979b-62a67cd5c53c\files\worktrees\uc07-uc08\run-uc08-batch
.ps1:91 caractere:11
+   $push = & git -C $w push origin $branch 2>&1
+           ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : NotSpecified: (To https://gith...otalEventos.git:String) [], RemoteException
    + FullyQualifiedErrorId : NativeCommandError
 
   eaef09a..02872ea  feature/58-sub-uc08-04-endpoint-e-testes-red -> feature/58-sub-uc08-04-endpoint-e-testes-red
````

PR #60: https://github.com/TotalEventos-DSC-2026/TotalEventos/pull/60 (confirmed OPEN/Draft).
Exact PR body updated:

## Draft PR — Issue #58 (UC08 payments)

### Issue
#58 — https://github.com/TotalEventos-DSC-2026/TotalEventos/issues/58

### Scenario
Endpoint processa pagamento e cobre resposta coerente para sucesso e falha.

### Blocked, not RED
Blocked: the endpoint flow needs a gateway fixture contract and inscription setup; neither may be fabricated or sent to a real gateway.

The specific node:test test is explicitly skipped after a successful TypeScript build. It does not claim to have reached a payment rule and does not send an outcome in the request or call a real gateway.

### Proposed REST/payment contract — pending team review
POST /inscricoes/:id/pagamentos, no client-controlled outcome; gateway approved → 201, declined → 402. Inscription setup uses proposed POST /eventos then POST /eventos/:id/inscricoes with {participanteId, sessaoId}; payment fixture contract is pending.

### Status
In Progress. Test commit: `02872eaa9fb4b3daeef4c90f7f372553a5cce4e7`. Review pending; PR remains Draft. No production changes, GREEN, merge, or issue closure.

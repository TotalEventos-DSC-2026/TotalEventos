# 04-05 — Evidências do TDD RED

Comando:

```powershell
npm run build; if ($LASTEXITCODE -eq 0) { node --test dist/test/evento-dto-red.test.js }
```

Saída observada:

```text
npm notice run totaleventos@1.0.0 build
npm notice run tsc -p tsconfig.json
✖ POST /eventos rejeita payload sem os campos obrigatórios (779.1882ms)
ℹ tests 1
ℹ pass 0
ℹ fail 1
AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:

404 !== 400
actual: 404
expected: 400
operator: 'strictEqual'
```

Interpretação: build e runner funcionaram; a ausência de `POST /eventos` impediu a validação de payload. O estado RED é da rota/precondição.

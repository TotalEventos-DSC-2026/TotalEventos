# 04-05 — Evidências do TDD RED

Comando:

```powershell
npm run build; if ($LASTEXITCODE -eq 0) { node --test dist/test/evento-endpoint-red.test.js }
```

Resultado real:

```text
npm notice run totaleventos@1.0.0 build
npm notice run tsc -p tsconfig.json
✖ endpoint expõe criação válida de evento com identificador (745.1284ms)
ℹ tests 1
ℹ pass 0
ℹ fail 1
AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:

404 !== 201
actual: 404
expected: 201
operator: 'strictEqual'
```

O endpoint não está registrado. O teste ainda não chegou às asserções de identificador e título.

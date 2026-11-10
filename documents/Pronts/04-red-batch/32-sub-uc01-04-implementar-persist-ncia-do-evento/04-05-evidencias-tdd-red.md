# 04-05 — Evidências do TDD RED

Comando:

```powershell
npm run build; if ($LASTEXITCODE -eq 0) { node --test dist/test/evento-persistencia-red.test.js }
```

Saída observada:

```text
npm notice run totaleventos@1.0.0 build
npm notice run tsc -p tsconfig.json
✖ evento criado pode ser recuperado pela consulta persistida (663.7583ms)
ℹ tests 1
ℹ pass 0
ℹ fail 1
AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:

404 !== 201
actual: 404
expected: 201
operator: 'strictEqual'
```

Build e runner passaram; a aplicação não reconhece `POST /eventos`. A asserção de persistência não foi alcançada, portanto permanece pendente.

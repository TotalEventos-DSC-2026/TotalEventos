# 04-05 — Evidências do TDD RED

Comando executado:

```powershell
npm run build; if ($LASTEXITCODE -eq 0) { node --test dist/test/evento-datas-red.test.js }
```

Saída observada:

```text
npm notice run totaleventos@1.0.0 build
npm notice run tsc -p tsconfig.json
✖ POST /eventos rejeita data final anterior à data inicial (525.3791ms)
ℹ tests 1
ℹ pass 0
ℹ fail 1
AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:

404 !== 400
actual: 404
expected: 400
operator: 'strictEqual'
```

O build compila e o runner executa. O RED observado é a ausência de `POST /eventos`; a regra de período não foi alcançada.

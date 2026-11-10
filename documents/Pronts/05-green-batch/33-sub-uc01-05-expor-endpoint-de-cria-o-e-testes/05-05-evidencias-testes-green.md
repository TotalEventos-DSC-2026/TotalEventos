# 05-05 — Evidências dos Testes GREEN

## Comparativo RED → GREEN

| Teste | RED observado antes da implementação | GREEN após a implementação |
|---|---|---|
| Datas | Esperado 400, recebido 404 | Passou: 400 para período inválido |
| DTO | Esperado 400, recebido 404 | Passou: 400 para campos ausentes |
| Endpoint | Esperado 201, recebido 404 | Passou: 201, ID presente e título preservado |
| Entidade | Esperado 201, recebido 404 | Passou: 201 e estado `RASCUNHO` |
| Persistência | Esperado 201, recebido 404 | Passou: 201, depois GET 200 com o título persistido |

O RED original era a rota ausente. As regras de DTO, datas, estado e leitura não eram alcançadas até a implementação.

## Testes UC01

Comandos executados no worktree isolado:

```powershell
npm run build
node --test dist/test/evento-entity-red.test.js dist/test/evento-dto-red.test.js dist/test/evento-datas-red.test.js dist/test/evento-persistencia-red.test.js dist/test/evento-endpoint-red.test.js
```

Saída real:

```text
npm notice run totaleventos@1.0.0 build
npm notice run tsc -p tsconfig.json
✔ POST /eventos rejeita data final anterior à data inicial (452.1159ms)
✔ POST /eventos rejeita payload sem os campos obrigatórios (457.5174ms)
✔ endpoint expõe criação válida de evento com identificador (462.399ms)
✔ criação representa o evento inicialmente como rascunho (500.7811ms)
✔ evento criado pode ser recuperado pela consulta persistida (485.6428ms)
ℹ tests 5
ℹ pass 5
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
```

## Suíte de regressão

Comando: `npm test` (executa o build e `node --test dist/test/*.test.js`).

Saída real:

```text
npm notice run totaleventos@1.0.0 test
npm notice run npm run build && node --test dist/test/*.test.js
npm notice run totaleventos@1.0.0 build
npm notice run tsc -p tsconfig.json

✔ módulos Nest resolvem os controllers e dependências do check-in (566.2285ms)
✔ servidor Nest expõe saúde e controllers de check-in (356.425ms)
✔ inscrição confirmada realiza check-in e persiste o estado (1.2409ms)
✔ inscrição com check-in feito gera conflito e não é persistida novamente (1.2091ms)
✔ inscrição não confirmada não realiza check-in nem persiste alteração (0.5579ms)
✔ inscrição ausente retorna erro de não encontrado (0.3619ms)
✔ ingresso válido realiza check-in e incrementa a lotação (0.7732ms)
✔ ingresso já utilizado não incrementa ocupação nem é persistido (0.5016ms)
✔ ingresso canceladNo não pode ser utilizado (0.5063ms)
✔ sessão lotada bloqueia check-in e preserva ocupação e ingresso (0.6725ms)
✔ check-in HTTP persiste ingresso e lotação juntos e rejeita duplicidade (829.1035ms)
✔ inscrição inexistente retorna 404 pela rota HTTP (12.8118ms)
✔ POST /eventos rejeita data final anterior à data inicial (802.8842ms)
✔ POST /eventos rejeita payload sem os campos obrigatórios (812.9352ms)
✔ endpoint expõe criação válida de evento com identificador (719.1524ms)
✔ criação representa o evento inicialmente como rascunho (805.6514ms)
✔ evento criado pode ser recuperado pela consulta persistida (746.77ms)
✔ GET /health reports that TotalEventos is running (107.1918ms)
✔ GET event sessions returns only published and active sessions (14.7311ms)
✔ session schedule can be filtered by date, time, and room (20.1669ms)
✔ empty schedules return a message that the program has not been published (9.4272ms)
✔ invalid schedule filters return 400 (4.9542ms)
✔ unknown routes return 404 (3.9667ms)

ℹ tests 23
ℹ pass 23
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
```

Os 23 testes incluíram módulos/check-ins, os cinco cenários UC01, saúde HTTP, consulta de sessões e filtros. Nenhuma asserção dos testes RED foi editada. Conclusão: os mesmos cinco testes que falhavam antes passaram após a implementação; não houve regressões observadas na suíte completa.

# 06-04 — Evidências de Regressão

## Comandos e resultados atuais

Worktree isolada `feature/uc01-29-33-green`; nenhuma alteração de produção entre a linha de base e esta validação. Build sem erro ou warning.

### Cinco testes UC01

Comando:

```powershell
npm run build
node --test dist/test/evento-entity-red.test.js dist/test/evento-dto-red.test.js dist/test/evento-datas-red.test.js dist/test/evento-persistencia-red.test.js dist/test/evento-endpoint-red.test.js
```

Saída:

```text
npm notice run totaleventos@1.0.0 build
npm notice run tsc -p tsconfig.json
✔ POST /eventos rejeita data final anterior à data inicial (536.4903ms)
✔ POST /eventos rejeita payload sem os campos obrigatórios (521.6454ms)
✔ endpoint expõe criação válida de evento com identificador (539.0931ms)
✔ criação representa o evento inicialmente como rascunho (512.3698ms)
✔ evento criado pode ser recuperado pela consulta persistida (537.8125ms)
ℹ tests 5
ℹ suites 0
ℹ pass 5
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 1768.1477
```

### Suíte completa

Comando:

```powershell
npm test
```

O script executa `npm run build && node --test dist/test/*.test.js`.

Saída:

```text
npm notice run totaleventos@1.0.0 test
npm notice run npm run build && node --test dist/test/*.test.js
npm notice run totaleventos@1.0.0 build
npm notice run tsc -p tsconfig.json
✔ módulos Nest resolvem os controllers e dependências do check-in (536.3347ms)
✔ servidor Nest expõe saúde e controllers de check-in (297.1567ms)
✔ inscrição confirmada realiza check-in e persiste o estado (0.476ms)
✔ inscrição com check-in feito gera conflito e não é persistida novamente (1.1758ms)
✔ inscrição não confirmada não realiza check-in nem persiste alteração (0.876ms)
✔ inscrição ausente retorna erro de não encontrado (0.3601ms)
✔ ingresso válido realiza check-in e incrementa a lotação (0.6599ms)
✔ ingresso já utilizado não incrementa ocupação nem é persistido (0.3918ms)
✔ ingresso canceladNo não pode ser utilizado (0.5083ms)
✔ sessão lotada bloqueia check-in e preserva ocupação e ingresso (0.7194ms)
✔ check-in HTTP persiste ingresso e lotação juntos e rejeita duplicidade (723.1961ms)
✔ inscrição inexistente retorna 404 pela rota HTTP (10.1263ms)
✔ POST /eventos rejeita data final anterior à data inicial (686.731ms)
✔ POST /eventos rejeita payload sem os campos obrigatórios (753.2301ms)
✔ endpoint expõe criação válida de evento com identificador (695.1903ms)
✔ criação representa o evento inicialmente como rascunho (804.1117ms)
✔ evento criado pode ser recuperado pela consulta persistida (745.6373ms)
✔ GET /health reports that TotalEventos is running (132.1666ms)
✔ GET event sessions returns only published and active sessions (12.7025ms)
✔ session schedule can be filtered by date, time, and room (14.7008ms)
✔ empty schedules return a message that the program has not been published (10.1769ms)
✔ invalid schedule filters return 400 (7.1817ms)
✔ unknown routes return 404 (5.4639ms)
ℹ tests 23
ℹ suites 0
ℹ pass 23
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 2531.0422
```

## Matriz comparativa

| Teste | Comportamento | Antes da implementação (RED) | GREEN / pós-preservação | Situação |
|---|---|---|---|---|
| `evento-entity-red.test.ts` | Estado inicial RASCUNHO | 404 | Aprovado | Preservado |
| `evento-dto-red.test.ts` | Campos obrigatórios | 404 | Aprovado | Preservado |
| `evento-datas-red.test.ts` | Ordem das datas | 404 | Aprovado | Preservado |
| `evento-persistencia-red.test.ts` | Persistência e leitura | 404 | Aprovado | Preservado |
| `evento-endpoint-red.test.ts` | Criação HTTP e identificador | 404 | Aprovado | Preservado |
| Suíte completa | Regressão de projeto | Não aplicável como baseline Material 04 | 23 aprovados | Sem regressão observada |

O registro GREEN do Material 05 também observou 5/5 nos testes UC01 e 23/23 na suíte completa. A execução Material 06 confirma os mesmos totais.

## Contratos e limites

Não houve alteração de interfaces, assinaturas, tipos retornados, injeção de dependência, DTOs, rotas ou schema durante esta etapa. Os testes são automatizados locais; o CI dos PRs não reporta checks. Os resultados comprovam apenas os cenários executados: não demonstram que regras ainda sem teste estejam implementadas nem substituem validação humana do contrato REST proposto.

## Parecer

**Nenhuma regressão observada no escopo testado.** Build bem-sucedido, 5/5 testes UC01 e 23/23 testes da suíte; nenhuma refatoração ou alteração de teste foi realizada.

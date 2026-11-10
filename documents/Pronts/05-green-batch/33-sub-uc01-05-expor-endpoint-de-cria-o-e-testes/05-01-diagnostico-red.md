# 05-01 — Diagnóstico RED

## Escopo

Sequência UC01 #29–33:

- #29 — modelar entidade Evento; estado inicial esperado `RASCUNHO`.
- #30 — definir DTO e rejeitar campos obrigatórios ausentes.
- #31 — rejeitar período com data final anterior à inicial.
- #32 — persistir e recuperar evento por identificador.
- #33 — expor criação HTTP e retornar identificador/título.

## Testes e evidência RED reproduzida

Branch de trabalho isolada: `feature/uc01-29-33-green`. Os cinco testes RED foram reunidos sem modificar suas asserções.

Comandos executados no worktree:

```powershell
npm run build
node --test dist/test/evento-entity-red.test.js dist/test/evento-dto-red.test.js dist/test/evento-datas-red.test.js dist/test/evento-persistencia-red.test.js dist/test/evento-endpoint-red.test.js
```

Resultado real:

```text
npm notice run totaleventos@1.0.0 build
npm notice run tsc -p tsconfig.json
ℹ tests 5
ℹ pass 0
ℹ fail 5
ℹ skipped 0
```

Falhas observadas:

| Teste | Esperado | Recebido | Critério específico alcançado? |
|---|---:|---:|---|
| `evento-datas-red` | 400 | 404 | Não; rota ausente impediu validar datas |
| `evento-dto-red` | 400 | 404 | Não; rota ausente impediu validar DTO |
| `evento-endpoint-red` | 201 | 404 | Sim, ausência de `POST /eventos` |
| `evento-entity-red` | 201 | 404 | Não; estado inicial não foi observado |
| `evento-persistencia-red` | 201 | 404 | Não; leitura persistida não foi alcançada |

Todos os cinco retornos vieram da aplicação NestJS; a causa observada é a ausência de rota. Isso não prova, por si só, a regra temporal, DTO, entidade ou persistência. O contrato de `POST /eventos`, `GET /eventos/:id`, `201`, `400`, o corpo e os nomes de campo são propostas documentadas no Material 04, pendentes de validação da equipe.

## Componentes envolvidos

O `AppModule` existente importa módulos de inscrições, acessos e grade, mas não possui módulo de eventos. O banco SQLite existente não declara uma tabela de eventos. Os critérios selecionados requerem DTO de entrada, entidade, serviço, adaptador de persistência e controller.

## Liberação para planejamento GREEN

Autorização de escopo recebida: implementar a sequência UC01 #29–33. A implementação deve atender aos contratos propostos sem alterar os testes. Não realizar merge nem encerrar issues.

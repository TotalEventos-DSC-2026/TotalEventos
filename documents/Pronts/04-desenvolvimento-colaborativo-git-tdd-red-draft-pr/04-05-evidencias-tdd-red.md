# 04-05 - Evidências do TDD RED

## Objetivo
Registrar a falha funcional legítima do primeiro teste automatizado executado antes da implementação do comportamento.

## Comando executado
```bash
npx tsx --test test/check-in.test.ts --test-name-pattern "cancelada"
```

## Falha observada
```text
✖ inscrição cancelada deve rejeitar explicitamente o check-in com motivo de cancelamento
AssertionError [ERR_ASSERTION]: The validation function is expected to return "true". Received undefined

Caught error:
InscricaoNaoConfirmadaException: A inscrição "insc-cancelada" precisa estar confirmada para realizar check-in.
```

## Interpretação
O cenário foi executado em estado RED: o teste falhou porque a regra de cancelamento ainda não expressa um motivo explícito para a rejeição de check-in. A implementação do comportamento pertence à etapa GREEN, que fica fora do escopo desta fase.

# 13-02 - Estrutura da coleção

## Árvore criada

```text
http-rest-client/
├── tests/
│   └── hello-world.http
├── grade-sessoes/
│   ├── grade-sessoes-controller.http
│   └── test-scenarios.http
├── acessos/
│   └── acessos-controller.http
├── inscricoes/
│   └── inscricoes-controller.http
└── containerizado/
    ├── README.md
    ├── 00-smoke.http
    ├── 01-grade-sessoes-caso-de-uso.http
    ├── 02-acessos-fronteira.http
    └── run-checks.sh
```

## Convenções

- Todos os arquivos usam `@baseUrl = http://localhost:3000`.
- Cada requisição tem título `### ... → esperado: ...`.
- Nenhum arquivo contém senha ou token.
- Arquivos `.http` não fazem assertivas; apenas documentam o que comparar.
- Os cenários com dados não usam UUID inventado.

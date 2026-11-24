# Relatório A — UC15 Alterar Produto

## Tabela de cobertura

| Item | Teste que prova | Situação |
|---|---|---|
| Fluxo principal / CA01 | `PATCH /products/:productId altera name de produto ativo` | Coberto |
| RN01 / CA04 | `PATCH /products/:productId retorna 404 para produto inexistente` | Coberto |
| RN02 | `PATCH /products/:productId trata produto removido como inexistente` | Coberto |
| RN03 / CA03 | `PATCH /products/:productId rejeita nome vazio` | Coberto |
| RF02 / CA02 | `PATCH /products/:productId rejeita UUID inválido` | Coberto |
| RF05 / CA05 | `ProductsService traduz falha de persistência da alteração` | Coberto no Service |
| RN05 | Nenhum teste de concorrência real; ADR de last write wins | Não implementado (ADR-001) |

# UC15 — Alterar Produto

## 1. Identificação
**Código:** UC15
**Nome:** Alterar Produto
**Sistema:** TotalEventos
**Módulo:** Products
**Tipo:** atualizar

## 2. Objetivo
Permitir alterar o atributo `name` de um produto ativo localizado por `productId`.

## 3. Atores
**Ator principal:** consumidor público da API de produtos.

## 4. Pré-condições
1. O produto ativo existe.
2. O `productId` informado possui formato UUID.

## 5. Pós-condições
### Em caso de sucesso
1. O `name` do produto ativo é atualizado.
2. A resposta contém somente `productId` e `name`.

### Em caso de falha
1. Nenhum dado é alterado.
2. O sistema responde `400`, `404` ou `500` conforme o erro.

## 6. Fluxo principal
1. O ator envia `PATCH /products/:productId` com `name`.
2. A fronteira valida o UUID e o DTO.
3. O Service consulta o produto ativo.
4. O Repository persiste somente a alteração de `name`.
5. A resposta HTTP retorna `200` com `productId` e `name`.

## 7. Fluxos alternativos
### FA01 — UUID inválido
Responde `400` pelo `InvalidProductIdException`.

### FA02 — Produto inexistente ou removido
Responde `404` pelo `ProductNotFoundException`.

### FE01 — Falha de persistência
Responde `500` com `ProductUpdateFailedException`, sem expor causa interna.

## 8. Regras de negócio
**RN01 — Produto ativo:** somente produto com `deletedAt` nulo pode ser alterado.
**RN02 — Removido é inexistente:** produto removido responde `404`.
**RN03 — Nome obrigatório:** `name` deve ser texto não vazio.
**RN04 — Campos restritos:** resposta contém apenas `productId` e `name`.
**RN05 — Last write wins:** alterações simultâneas não possuem controle de versão.

## 9. Requisitos funcionais
**RF01:** alterar `name` por `productId`.
**RF02:** validar UUID.
**RF03:** validar nome.
**RF04:** responder `404` para inexistente ou removido.
**RF05:** responder `500` genérico para falha de persistência.

## 10. Critérios de aceite
**CA01:** alteração válida retorna `200` e os dois campos.
**CA02:** UUID inválido retorna `400` sem chamar o Service.
**CA03:** nome vazio retorna `400`.
**CA04:** produto inexistente ou removido retorna `404`.
**CA05:** falha de persistência retorna `500` sem causa interna.

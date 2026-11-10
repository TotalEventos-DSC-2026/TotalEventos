# 04-02 — Inspeção do Repositório

- Repositório: `TotalEventos-DSC-2026/TotalEventos`
- Branch: `feature/29-sub-uc01-01-modelar-entidade-evento-red`
- Branch principal: `main`
- Stack: TypeScript, NestJS, Node.js; testes com `node:test` e `node:assert/strict`.
- Build: `npm run build`
- Teste: `node --test dist/test/evento-entity-red.test.js`
- Aplicação: `AppModule` não registra módulo ou rota de eventos; a requisição `POST /eventos` retorna 404.

O teste compila e inicia a aplicação. O resultado não é erro de sintaxe ou configuração do runner. A falha observada é a rota ausente; a resposta de domínio ainda não pode ser verificada.

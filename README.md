# TotalEventos

API do projeto TotalEventos em TypeScript com NestJS e SQLite.

## Requisitos e execução

- Node.js 20 ou superior
- npm

```bash
npm install
npm start
```

Por padrão, a API fica disponível em `http://localhost:3000`. Configure `PORT`
para usar outra porta. O banco fica em `data/totaleventos.sqlite`; configure
`DATABASE_PATH` para escolher outro arquivo.

## Endpoints

- `GET /health` — estado da API.
- `GET /eventos/:eventoId/sessoes` — grade publicada, com filtros opcionais
  `data` (`AAAA-MM-DD`), `horario` (`HH:mm`) e `sala`.
- `POST /acessos/check-in` — recebe `{ "codigoQr": "..." }` para registrar
  entrada. A gravação do ingresso e da lotação é feita em uma transação SQLite.
- `POST /inscricoes/:id/check-in` — registra o check-in de inscrição confirmada.

Ingressos, inscrições e sessões de lotação são persistidos em SQLite. O QR Code
é único, e o check-in de acesso atualiza ingresso e lotação atomicamente. Este
projeto ainda não inclui endpoints administrativos para cadastrar eventos,
ingressos, inscrições ou sessões; esses registros devem ser carregados por uma
rotina administrativa ou inseridos no banco.

## Desenvolvimento e testes

```bash
npm run dev
npm run build
npm test
```

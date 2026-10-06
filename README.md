# TotalEventos
Trabalho final disciplina DSC -  alunos Emmanuelly, Fernando e Luiz Henrique

## API Node.js

Projeto inicial da API do TotalEventos, usando o servidor HTTP nativo do Node.js.

### Requisitos

- Node.js 18 ou superior
- npm

### Executar

```bash
npm start
```

Por padrão, a API fica disponível em `http://localhost:3000`. Para usar outra porta,
defina a variável de ambiente `PORT`.

### Rotas disponíveis

- `GET /health` — verifica se a API está funcionando.
- Qualquer outra rota retorna `404`.

### Desenvolvimento e testes

```bash
npm run dev
npm test
```

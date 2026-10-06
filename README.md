# TotalEventos
Trabalho final disciplina DSC -  alunos Emmanuelly, Fernando e Luiz Henrique

## API Node.js com TypeScript

API do TotalEventos em TypeScript, usando o servidor HTTP nativo do Node.js.

### Requisitos

- Node.js 18 ou superior
- npm

### Executar

```bash
npm install
npm start
```

Por padrão, a API fica disponível em `http://localhost:3000`. Para usar outra porta,
defina a variável de ambiente `PORT`.

### Rotas disponíveis

- `GET /health` — verifica se a API está funcionando.
- `GET /eventos/:eventoId/sessoes` — consulta a grade publicada do evento.
  Aceita os filtros opcionais `data` (`AAAA-MM-DD`), `horario` (`HH:mm`) e `sala`.
- Qualquer outra rota retorna `404`.

O caso de uso `ConsultarGradeSessoes` exibe somente sessões publicadas e ativas.
O horário informado deve estar dentro do intervalo da sessão (início incluído e
fim excluído). Quando não há sessões correspondentes, a API retorna uma lista
vazia e informa que a programação ainda não foi disponibilizada. As sessões são
recebidas em memória ao criar o servidor; persistência de eventos ainda não está
configurada.

O código está organizado em `src/common` (utilidades compartilhadas),
`src/repositories` (acesso aos dados), `src/enum` (constantes enumeradas) e
`src/modules` (casos de uso organizados por módulo).

### Desenvolvimento e testes

```bash
npm run dev
npm run build
npm test
```

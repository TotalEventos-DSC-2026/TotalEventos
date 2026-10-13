# TotalEventos

API REST do projeto TotalEventos, desenvolvida em TypeScript com NestJS e SQLite.
O projeto reúne consulta da grade de sessões, check-in de ingressos e inscrições,
controle de lotação e testes unitários e de integração.

## Funcionalidades

- Consulta de sessões publicadas e ativas de um evento, com filtros por data,
  horário e sala.
- Check-in presencial de ingresso por código QR.
- Check-in de inscrição confirmada.
- Persistência SQLite para ingressos, inscrições e lotação das sessões.
- Check-in de ingresso com atualização transacional do ingresso e da lotação.
- Validação de ingresso utilizado ou indisponível e prevenção de lotação acima
  da capacidade da sessão.

## Requisitos

- Node.js 20 ou superior
- npm

## Instalação e execução

Instale as dependências:

```bash
npm install
```

Inicie a API em modo de produção:

```bash
npm start
```

Para desenvolvimento, com reinicialização automática:

```bash
npm run dev
```

Por padrão, a API fica disponível em `http://localhost:3000`.

### Configuração

| Variável | Padrão | Descrição |
| --- | --- | --- |
| `PORT` | `3000` | Porta HTTP da API. |
| `DATABASE_PATH` | `data/totaleventos.sqlite` | Caminho do arquivo SQLite. Caminhos relativos são resolvidos a partir do diretório de execução. |

O diretório do banco é criado automaticamente. Ao iniciar, a aplicação cria as
tabelas necessárias caso ainda não existam. Os arquivos do banco SQLite são
ignorados pelo Git.

## Endpoints

### `GET /health`

Verifica se a API está em execução.

**Resposta `200`:**

```json
{
  "status": "ok",
  "name": "TotalEventos"
}
```

### `GET /eventos/:eventoId/sessoes`

Consulta a grade de sessões publicadas e ativas de um evento.

Filtros opcionais:

| Parâmetro | Formato | Descrição |
| --- | --- | --- |
| `data` | `AAAA-MM-DD` | Filtra pela data da sessão. |
| `horario` | `HH:mm` | Retorna sessões cujo intervalo inclui o horário informado (início incluído e fim excluído). |
| `sala` | Texto | Filtra pela sala, sem diferenciar maiúsculas de minúsculas. |

**Exemplo:**

```http
GET /eventos/evento-1/sessoes?data=2026-10-20&horario=09:30&sala=Auditório%20A
```

**Resposta com sessões:**

```json
{
  "eventoId": "evento-1",
  "sessoes": [
    {
      "id": "sessao-1",
      "eventoId": "evento-1",
      "titulo": "Abertura",
      "data": "2026-10-20",
      "horaInicio": "09:00",
      "horaFim": "10:00",
      "sala": "Auditório A",
      "publicada": true,
      "ativa": true
    }
  ]
}
```

Quando não há sessões correspondentes, a API retorna `sessoes: []` e informa
que a programação ainda não foi disponibilizada. Filtros inválidos retornam
`400 Bad Request`.

### `POST /acessos/check-in`

Registra a entrada usando o código QR de um ingresso emitido.

**Requisição:**

```json
{
  "codigoQr": "qr-do-ingresso"
}
```

**Resposta de sucesso (`201`):**

```json
{
  "ingressoId": "ingresso-1",
  "participanteId": "participante-1",
  "status": "UTILIZADO",
  "updatedAt": "2026-10-12T12:00:00.000Z",
  "message": "Check-in realizado com sucesso."
}
```

O ingresso deve estar no estado `EMITIDO`. Quando o check-in é aceito, o estado
passa para `UTILIZADO` e a ocupação da sessão aumenta em uma unidade. As duas
alterações são feitas na mesma transação SQLite. Um código QR já utilizado não
pode ser aceito novamente; ingressos indisponíveis e sessões sem vagas também
são rejeitados.

### `POST /inscricoes/:id/check-in`

Registra o check-in de uma inscrição no estado `CONFIRMADA`.

**Exemplo:**

```http
POST /inscricoes/inscricao-1/check-in
```

Em caso de sucesso, a inscrição passa para `CHECK_IN_REALIZADO` e a resposta
inclui o identificador da inscrição, o estado atualizado, a data da alteração e
uma mensagem de confirmação. Inscrições pendentes, canceladas ou já utilizadas
para check-in são rejeitadas.

### Respostas de erro

Os endpoints de check-in usam os códigos HTTP do NestJS para indicar falhas,
incluindo:

| Código | Situação |
| --- | --- |
| `400 Bad Request` | Código QR ou identificador ausente, ingresso indisponível, inscrição não confirmada ou filtro inválido na consulta da grade. |
| `404 Not Found` | Ingresso, inscrição ou sessão não encontrada. |
| `409 Conflict` | Check-in duplicado ou capacidade máxima da sessão atingida. |

## Persistência e limitações atuais

Ingressos, inscrições e dados de lotação são armazenados em SQLite. O código QR
do ingresso é único e a lotação respeita a capacidade máxima configurada.

Ainda não existem endpoints administrativos para cadastrar ou atualizar eventos,
sessões, ingressos, inscrições ou capacidade. Esses dados precisam ser
disponibilizados por uma rotina externa ou carregados diretamente no banco. A
consulta da grade usa atualmente um repositório em memória, separado do SQLite;
por isso, a API iniciada sem sessões carregadas retorna uma grade vazia.

## Estrutura do projeto

```text
src/
├── common/                 # Enums, exceções e utilitários HTTP compartilhados
├── database/               # Conexão e configuração do SQLite
├── modules/
│   ├── acessos/             # Check-in de ingressos
│   ├── grade-sessoes/       # Consulta da grade de sessões
│   ├── inscricoes/          # Check-in de inscrições
│   └── lotacao/             # Regras e persistência da lotação
└── server.ts                # Inicialização da aplicação
test/                        # Testes unitários, HTTP e E2E
```

## Testes e build

Execute os testes:

```bash
npm test
```

O comando compila o TypeScript e executa os testes compilados. Para compilar sem
executar os testes:

```bash
npm run build
```

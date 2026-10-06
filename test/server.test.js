const assert = require('node:assert/strict');
const { after, before, test } = require('node:test');
const { createServer } = require('../src/server');

const sessoes = [
  {
    id: 'sessao-1',
    eventoId: 'evento-1',
    titulo: 'Abertura',
    data: '2026-10-20',
    horaInicio: '09:00',
    horaFim: '10:00',
    sala: 'Auditório A',
    publicada: true,
    ativa: true,
  },
  {
    id: 'sessao-2',
    eventoId: 'evento-1',
    titulo: 'Rascunho',
    data: '2026-10-20',
    horaInicio: '10:00',
    horaFim: '11:00',
    sala: 'Auditório A',
    publicada: false,
    ativa: true,
  },
  {
    id: 'sessao-3',
    eventoId: 'evento-1',
    titulo: 'Cancelada',
    data: '2026-10-20',
    horaInicio: '11:00',
    horaFim: '12:00',
    sala: 'Auditório B',
    publicada: true,
    ativa: false,
  },
];

let server;
let baseUrl;

before(async () => {
  server = createServer({ sessoes });
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  baseUrl = `http://127.0.0.1:${server.address().port}`;
});

after(async () => {
  await new Promise((resolve, reject) => {
    server.close((error) => (error ? reject(error) : resolve()));
  });
});

test('GET /health reports that TotalEventos is running', async () => {
  const response = await fetch(`${baseUrl}/health`);

  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { status: 'ok', name: 'TotalEventos' });
});

test('GET event sessions returns only published and active sessions', async () => {
  const response = await fetch(`${baseUrl}/eventos/evento-1/sessoes`);

  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), {
    eventoId: 'evento-1',
    sessoes: [sessoes[0]],
  });
});

test('session schedule can be filtered by date, time, and room', async () => {
  const response = await fetch(
    `${baseUrl}/eventos/evento-1/sessoes?data=2026-10-20&horario=09%3A30&sala=Audit%C3%B3rio%20A`,
  );

  assert.equal(response.status, 200);
  assert.deepEqual((await response.json()).sessoes, [sessoes[0]]);
});

test('empty schedules return a message that the program has not been published', async () => {
  const response = await fetch(`${baseUrl}/eventos/evento-sem-sessoes/sessoes`);

  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), {
    eventoId: 'evento-sem-sessoes',
    sessoes: [],
    mensagem: 'A programação ainda não foi disponibilizada.',
  });
});

test('invalid schedule filters return 400', async () => {
  const response = await fetch(`${baseUrl}/eventos/evento-1/sessoes?data=2026-02-30`);

  assert.equal(response.status, 400);
  assert.deepEqual(await response.json(), { error: 'Filtros inválidos' });
});

test('unknown routes return 404', async () => {
  const response = await fetch(`${baseUrl}/rota-inexistente`);

  assert.equal(response.status, 404);
  assert.deepEqual(await response.json(), { error: 'Rota não encontrada' });
});

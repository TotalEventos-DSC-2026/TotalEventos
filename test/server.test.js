const assert = require('node:assert/strict');
const { after, before, test } = require('node:test');
const { createServer } = require('../src/server');

let server;
let baseUrl;

before(async () => {
  server = createServer();
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

test('unknown routes return 404', async () => {
  const response = await fetch(`${baseUrl}/rota-inexistente`);

  assert.equal(response.status, 404);
  assert.deepEqual(await response.json(), { error: 'Rota não encontrada' });
});

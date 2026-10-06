const http = require('node:http');
const { consultarGradeSessoes } = require('./use-cases/consultar-grade-sessoes');

function createServer({ sessoes = [] } = {}) {
  return http.createServer((request, response) => {
    if (request.method === 'GET' && request.url === '/health') {
      response.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
      response.end(JSON.stringify({ status: 'ok', name: 'TotalEventos' }));
      return;
    }

    const url = new URL(request.url, 'http://localhost');
    const rotaGrade = url.pathname.match(/^\/eventos\/([^/]+)\/sessoes$/);

    if (request.method === 'GET' && rotaGrade) {
      const data = url.searchParams.get('data') || undefined;
      const horario = url.searchParams.get('horario') || undefined;
      const sala = url.searchParams.get('sala') || undefined;

      if (
        (data && !isDataValida(data)) ||
        (horario && !/^(?:[01]\d|2[0-3]):[0-5]\d$/.test(horario)) ||
        (sala !== undefined && !sala.trim())
      ) {
        response.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
        response.end(JSON.stringify({ error: 'Filtros inválidos' }));
        return;
      }

      const eventoId = rotaGrade[1];
      const resultado = consultarGradeSessoes({
        eventoId,
        sessoes,
        data,
        horario,
        sala,
      });

      response.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
      response.end(
        JSON.stringify({
          eventoId,
          sessoes: resultado,
          ...(resultado.length === 0 && {
            mensagem: 'A programação ainda não foi disponibilizada.',
          }),
        }),
      );
      return;
    }

    response.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8' });
    response.end(JSON.stringify({ error: 'Rota não encontrada' }));
  });
}

function isDataValida(data) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(data)) {
    return false;
  }

  const parsed = new Date(`${data}T00:00:00.000Z`);
  return !Number.isNaN(parsed.getTime()) && parsed.toISOString().startsWith(data);
}

if (require.main === module) {
  const port = Number(process.env.PORT) || 3000;
  const server = createServer();

  server.listen(port, () => {
    console.log(`TotalEventos disponível em http://localhost:${port}`);
  });
}

module.exports = { createServer };

const http = require('node:http');
const { isDataValida, isHorarioValido, sendBadRequest, sendJson } = require('./common/http');
const { HttpStatus } = require('./enum/http-status');
const { createConsultarGradeSessoes } = require('./modules/grade-sessoes/consultar-grade-sessoes');
const { createSessoesRepository } = require('./repositories/sessoes-repository');

function createServer({ sessoes = [] } = {}) {
  const consultarGradeSessoes = createConsultarGradeSessoes(
    createSessoesRepository(sessoes),
  );

  return http.createServer((request, response) => {
    if (request.method === 'GET' && request.url === '/health') {
      sendJson(response, HttpStatus.OK, { status: 'ok', name: 'TotalEventos' });
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
        (horario && !isHorarioValido(horario)) ||
        (sala !== undefined && !sala.trim())
      ) {
        sendBadRequest(response, 'Filtros inválidos');
        return;
      }

      const body = consultarGradeSessoes({
        eventoId: rotaGrade[1],
        data,
        horario,
        sala,
      });
      sendJson(response, HttpStatus.OK, body);
      return;
    }

    sendJson(response, HttpStatus.NOT_FOUND, { error: 'Rota não encontrada' });
  });
}

if (require.main === module) {
  const port = Number(process.env.PORT) || 3000;
  const server = createServer();

  server.listen(port, () => {
    console.log(`TotalEventos disponível em http://localhost:${port}`);
  });
}

module.exports = { createServer };

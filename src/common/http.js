const { HttpStatus } = require('../enum/http-status');

function sendJson(response, statusCode, body) {
  response.writeHead(statusCode, { 'Content-Type': 'application/json; charset=utf-8' });
  response.end(JSON.stringify(body));
}

function isDataValida(data) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(data)) {
    return false;
  }

  const parsed = new Date(`${data}T00:00:00.000Z`);
  return !Number.isNaN(parsed.getTime()) && parsed.toISOString().startsWith(data);
}

function isHorarioValido(horario) {
  return /^(?:[01]\d|2[0-3]):[0-5]\d$/.test(horario);
}

function sendBadRequest(response, message) {
  sendJson(response, HttpStatus.BAD_REQUEST, { error: message });
}

module.exports = { isDataValida, isHorarioValido, sendBadRequest, sendJson };

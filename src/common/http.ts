import type { ServerResponse } from 'node:http';
import { HttpStatus } from '../enum/http-status';

export function sendJson(
  response: ServerResponse,
  statusCode: HttpStatus,
  body: unknown,
): void {
  response.writeHead(statusCode, { 'content-type': 'application/json; charset=utf-8' });
  response.end(JSON.stringify(body));
}

export function sendBadRequest(response: ServerResponse, message: string): void {
  sendJson(response, HttpStatus.BAD_REQUEST, { error: message });
}

export function isDataValida(data: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(data)) return false;
  const parsed = new Date(`${data}T00:00:00.000Z`);
  return !Number.isNaN(parsed.valueOf()) && parsed.toISOString().slice(0, 10) === data;
}

export function isHorarioValido(horario: string): boolean {
  return /^(?:[01]\d|2[0-3]):[0-5]\d$/.test(horario);
}

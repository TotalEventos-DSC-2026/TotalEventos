import { createServer as createHttpServer } from 'node:http';
import {
  isDataValida,
  isHorarioValido,
  sendBadRequest,
  sendJson,
} from './common/http';
import { HttpStatus } from './enum/http-status';
import { createConsultarGradeSessoes } from './modules/grade-sessoes/consultar-grade-sessoes';
import type { Sessao } from './modules/grade-sessoes/types';
import { createSessoesRepository } from './repositories/sessoes-repository';

interface CreateServerOptions {
  sessoes?: readonly Sessao[];
}

export function createServer({ sessoes = [] }: CreateServerOptions = {}) {
  const consultarGradeSessoes = createConsultarGradeSessoes(
    createSessoesRepository(sessoes),
  );

  return createHttpServer((request, response) => {
    if (request.method === 'GET' && request.url === '/health') {
      sendJson(response, HttpStatus.OK, { status: 'ok', name: 'TotalEventos' });
      return;
    }

    const url = new URL(request.url ?? '/', 'http://localhost');
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

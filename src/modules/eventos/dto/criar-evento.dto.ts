import { BadRequestException } from '@nestjs/common';

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

const isDateTime = (value: unknown): value is string => {
  if (
    typeof value !== 'string' ||
    !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,3})?(?:Z|[+-]\d{2}:\d{2})$/.test(value) ||
    Number.isNaN(Date.parse(value))
  ) {
    return false;
  }

  const date = value.slice(0, 10);
  const parsedDate = new Date(`${date}T00:00:00.000Z`);
  return !Number.isNaN(parsedDate.getTime()) && parsedDate.toISOString().slice(0, 10) === date;
};

export class CriarEventoDto {
  private constructor(
    readonly titulo: string,
    readonly descricao: string | undefined,
    readonly dataInicio: Date,
    readonly dataFim: Date,
    readonly espacoFisicoId: string,
  ) {}

  static from(value: unknown): CriarEventoDto {
    if (!isRecord(value)) {
      throw new BadRequestException('O corpo da requisição deve ser um objeto.');
    }

    const { titulo, descricao, dataInicio, dataFim, espacoFisicoId } = value;
    if (typeof titulo !== 'string' || !titulo.trim()) {
      throw new BadRequestException('O título do evento é obrigatório.');
    }
    if (descricao !== undefined && typeof descricao !== 'string') {
      throw new BadRequestException('A descrição do evento deve ser um texto.');
    }
    if (!isDateTime(dataInicio) || !isDateTime(dataFim)) {
      throw new BadRequestException('As datas do evento devem estar no formato ISO 8601.');
    }
    if (
      typeof espacoFisicoId !== 'string' ||
      !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(espacoFisicoId)
    ) {
      throw new BadRequestException('O identificador do espaço físico deve ser um UUID v4.');
    }

    return new CriarEventoDto(
      titulo,
      descricao,
      new Date(dataInicio),
      new Date(dataFim),
      espacoFisicoId,
    );
  }
}

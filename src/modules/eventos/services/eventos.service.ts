import { BadRequestException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { CriarEventoDto } from '../dto/criar-evento.dto';
import { Evento, PeriodoEventoInvalidoException } from '../entities/evento.entity';
import { EVENTOS_REPOSITORY } from '../repositories/eventos.repository.interface';
import type { EventosRepository } from '../repositories/eventos.repository.interface';

@Injectable()
export class EventosService {
  constructor(
    @Inject(EVENTOS_REPOSITORY)
    private readonly eventosRepository: EventosRepository,
  ) {}

  async criar(dto: CriarEventoDto): Promise<Evento> {
    let evento: Evento;
    try {
      evento = Evento.criar({
        id: randomUUID(),
        titulo: dto.titulo,
        descricao: dto.descricao,
        dataInicio: dto.dataInicio,
        dataFim: dto.dataFim,
        espacoFisicoId: dto.espacoFisicoId,
      });
    } catch (error) {
      if (error instanceof PeriodoEventoInvalidoException) {
        throw new BadRequestException(error.message);
      }
      throw error;
    }

    return this.eventosRepository.save(evento);
  }

  async buscarPorId(id: string): Promise<Evento> {
    const evento = await this.eventosRepository.findById(id);
    if (!evento) {
      throw new NotFoundException(`Evento ${id} não encontrado.`);
    }
    return evento;
  }
}

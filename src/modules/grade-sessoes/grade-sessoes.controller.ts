import { BadRequestException, Controller, Get, Param, Query } from '@nestjs/common';
import {
  isDataValida,
  isHorarioValido,
} from '../../common/http';
import { createConsultarGradeSessoes } from './consultar-grade-sessoes';
import { createSessoesRepository } from '../../repositories/sessoes-repository';

@Controller()
export class GradeSessoesController {
  private readonly consultarGradeSessoes = createConsultarGradeSessoes(
    createSessoesRepository([]),
  );

  @Get('health')
  health() {
    return { status: 'ok', name: 'TotalEventos' };
  }

  @Get('eventos/:eventoId/sessoes')
  consultar(
    @Param('eventoId') eventoId: string,
    @Query('data') data?: string,
    @Query('horario') horario?: string,
    @Query('sala') sala?: string,
  ) {
    if (
      (data && !isDataValida(data)) ||
      (horario && !isHorarioValido(horario)) ||
      (sala !== undefined && !sala.trim())
    ) {
      throw new BadRequestException('Filtros inválidos');
    }

    return this.consultarGradeSessoes({
      eventoId,
      data,
      horario,
      sala,
    });
  }
}

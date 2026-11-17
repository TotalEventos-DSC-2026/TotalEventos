import {
  BadRequestException,
  Controller,
  Get,
  Inject,
  Param,
  Query,
} from '@nestjs/common';
import {
  isDataValida,
  isHorarioValido,
} from '../../common/http';
import {
  SESSOES_REPOSITORY,
  type SessoesRepository,
} from '../../repositories/sessoes-repository';
import { createConsultarGradeSessoes } from './consultar-grade-sessoes';

@Controller()
export class GradeSessoesController {
  private readonly consultarGradeSessoes: ReturnType<
    typeof createConsultarGradeSessoes
  >;

  constructor(
    @Inject(SESSOES_REPOSITORY)
    private readonly sessoesRepository: SessoesRepository,
  ) {
    this.consultarGradeSessoes = createConsultarGradeSessoes(
      this.sessoesRepository,
    );
  }

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

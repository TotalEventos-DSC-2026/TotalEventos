import { Controller, Param, Post } from '@nestjs/common';
import { InscricoesService } from '../services/inscricoes.service';
import { RealizarCheckInResponseDto } from '../dto/realizar-check-in-response.dto';

@Controller('inscricoes')
export class InscricoesController {
  constructor(private readonly inscricoesService: InscricoesService) {}

  @Post(':id/check-in')
  async confirmarCheckIn(@Param('id') id: string): Promise<RealizarCheckInResponseDto> {
    return this.inscricoesService.realizarCheckIn(id);
  }
}
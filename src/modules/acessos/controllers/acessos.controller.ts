import { Controller, Post, Body } from '@nestjs/common';
import { AcessosService } from '../services/acessos.service.js';
import { RealizarCheckInResponseDto } from '../dto/realizar-check-in-response.dto.js';

@Controller('acessos')
export class AcessosController {
  constructor(private readonly acessosService: AcessosService) {}

  @Post('check-in')
  async confirmarCheckIn(@Body('codigoQr') codigoQr: string): Promise<RealizarCheckInResponseDto> {
    return this.acessosService.realizarCheckIn(codigoQr);
  }
}
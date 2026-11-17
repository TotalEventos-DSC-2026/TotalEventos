import { Controller, Post, Body } from '@nestjs/common';
import { AcessosService } from '../services/acessos.service';
import { RealizarCheckInRequestDto } from '../dto/realizar-check-in-request.dto';
import { RealizarCheckInResponseDto } from '../dto/realizar-check-in-response.dto';

@Controller('acessos')
export class AcessosController {
  constructor(private readonly acessosService: AcessosService) {}

  @Post('check-in')
  async confirmarCheckIn(
    @Body() dto: RealizarCheckInRequestDto,
  ): Promise<RealizarCheckInResponseDto> {
    return this.acessosService.realizarCheckIn(dto.codigoQr);
  }
}
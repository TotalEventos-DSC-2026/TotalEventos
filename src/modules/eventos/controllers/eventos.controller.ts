import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CriarEventoDto } from '../dto/criar-evento.dto';
import { EventosService } from '../services/eventos.service';

@Controller('eventos')
export class EventosController {
  constructor(private readonly eventosService: EventosService) {}

  @Post()
  criar(@Body() body: unknown) {
    return this.eventosService.criar(CriarEventoDto.from(body));
  }

  @Get(':id')
  buscarPorId(@Param('id') id: string) {
    return this.eventosService.buscarPorId(id);
  }
}

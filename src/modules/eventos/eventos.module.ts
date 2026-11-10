import { Module } from '@nestjs/common';
import { EventosController } from './controllers/eventos.controller';
import { EVENTOS_REPOSITORY } from './repositories/eventos.repository.interface';
import { SqliteEventosRepository } from './repositories/sqlite-eventos.repository';
import { EventosService } from './services/eventos.service';

@Module({
  controllers: [EventosController],
  providers: [
    EventosService,
    { provide: EVENTOS_REPOSITORY, useClass: SqliteEventosRepository },
  ],
})
export class EventosModule {}

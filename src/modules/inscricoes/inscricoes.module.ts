import { Module } from '@nestjs/common';
import { InscricoesController } from './controllers/inscricoes.controller';
import { InscricoesService } from './services/inscricoes.service';
import { INSCRICOES_REPOSITORY } from './repositories/inscricoes.repository.interface';
import { InMemoryInscricoesRepository } from './repositories/in-memory-inscricoes.repository';

@Module({
  controllers: [InscricoesController],
  providers: [
    InscricoesService,
    { provide: INSCRICOES_REPOSITORY, useClass: InMemoryInscricoesRepository },
  ],
})
export class InscricoesModule {}
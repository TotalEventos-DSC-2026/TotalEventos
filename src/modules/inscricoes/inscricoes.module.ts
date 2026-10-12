import { Module } from '@nestjs/common';
import { InscricoesController } from './controllers/inscricoes.controller';
import { InscricoesService } from './services/inscricoes.service';
import { INSCRICOES_REPOSITORY } from './repositories/inscricoes.repository.interface';
import { SqliteInscricoesRepository } from './repositories/sqlite-inscricoes.repository';

@Module({
  controllers: [InscricoesController],
  providers: [
    InscricoesService,
    { provide: INSCRICOES_REPOSITORY, useClass: SqliteInscricoesRepository },
  ],
})
export class InscricoesModule {}

import { Module } from '@nestjs/common';
import { AcessosController } from './controllers/acessos.controller';
import { AcessosService } from './services/acessos.service';
import { INGRESSOS_REPOSITORY } from './repositories/ingressos.repository.interface';
import { SqliteIngressosRepository } from './repositories/sqlite-ingressos.repository';
import { SessoesLotacaoModule } from '../lotacao/sessoes-lotacao.module';

@Module({
  imports: [SessoesLotacaoModule],
  controllers: [AcessosController],
  providers: [
    AcessosService,
    { provide: INGRESSOS_REPOSITORY, useClass: SqliteIngressosRepository },
  ],
})
export class AcessosModule {}

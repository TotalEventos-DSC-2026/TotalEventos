import { Module } from '@nestjs/common';
import { SESSOES_LOTACAO_REPOSITORY } from './repositories/sessoes-lotacao.repository.interface';
import { SqliteSessoesLotacaoRepository } from './repositories/sqlite-sessoes-lotacao.repository';
import { TypeOrmSessoesLotacaoRepository } from './repositories/typeorm-sessoes-lotacao.repository';

@Module({
  providers: [
    {
      provide: SESSOES_LOTACAO_REPOSITORY,
      useClass: process.env.PERSISTENCE === 'postgres'
        ? TypeOrmSessoesLotacaoRepository
        : SqliteSessoesLotacaoRepository,
    },
  ],
  exports: [SESSOES_LOTACAO_REPOSITORY],
})
export class SessoesLotacaoModule {}

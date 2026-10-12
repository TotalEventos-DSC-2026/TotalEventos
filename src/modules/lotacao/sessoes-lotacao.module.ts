import { Module } from '@nestjs/common';
import { SESSOES_LOTACAO_REPOSITORY } from './repositories/sessoes-lotacao.repository.interface';
import { InMemorySessoesLotacaoRepository } from './repositories/in-memory-sessoes-lotacao.repository';

@Module({
  providers: [
    {
      provide: SESSOES_LOTACAO_REPOSITORY,
      useClass: InMemorySessoesLotacaoRepository,
    },
  ],
  exports: [SESSOES_LOTACAO_REPOSITORY],
})
export class SessoesLotacaoModule {}

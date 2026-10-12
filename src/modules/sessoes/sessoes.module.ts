import { Module } from '@nestjs/common';
import { SessoesLotacaoModule } from '../lotacao/sessoes-lotacao.module';

@Module({
  imports: [SessoesLotacaoModule],
  exports: [SessoesLotacaoModule],
})
export class SessoesModule {}
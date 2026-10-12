import { Module } from '@nestjs/common';
import { AcessosModule } from './modules/acessos/acessos.module';
import { GradeSessoesModule } from './modules/grade-sessoes/grade-sessoes.module';
import { InscricoesModule } from './modules/inscricoes/inscricoes.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule, AcessosModule, GradeSessoesModule, InscricoesModule],
})
export class AppModule {}

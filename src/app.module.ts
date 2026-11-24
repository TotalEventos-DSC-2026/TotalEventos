import { Module } from '@nestjs/common';
import { AcessosModule } from './modules/acessos/acessos.module';
import { GradeSessoesModule } from './modules/grade-sessoes/grade-sessoes.module';
import { InscricoesModule } from './modules/inscricoes/inscricoes.module';
import { DatabaseModule } from './database/database.module';
import { PostgresModule } from './database/postgres.module';
import { HealthController } from './common/health.controller';
import { ProductsModule } from './modules/products/products.module';

@Module({
  imports: [
    process.env.PERSISTENCE === 'postgres'
      ? PostgresModule
      : DatabaseModule,
    AcessosModule,
    GradeSessoesModule,
    InscricoesModule,
    ProductsModule,
  ],
  controllers: [HealthController],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { SqliteDatabase } from '../../database/sqlite-database';
import {
  createSqliteSessoesRepository,
  SESSOES_REPOSITORY,
} from '../../repositories/sessoes-repository';
import { GradeSessoesController } from './grade-sessoes.controller';

@Module({
  controllers: [GradeSessoesController],
  providers: [
    {
      provide: SESSOES_REPOSITORY,
      useFactory: (db: SqliteDatabase) => createSqliteSessoesRepository(db),
      inject: [SqliteDatabase],
    },
  ],
})
export class GradeSessoesModule {}
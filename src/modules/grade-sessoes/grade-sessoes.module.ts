import { Module } from '@nestjs/common';
import { SqliteDatabase } from '../../database/sqlite-database';
import {
  createSessoesRepository,
  createSqliteSessoesRepository,
  SESSOES_REPOSITORY,
} from '../../repositories/sessoes-repository';
import { GradeSessoesController } from './grade-sessoes.controller';

@Module({
  controllers: [GradeSessoesController],
  providers: [
    {
      provide: SESSOES_REPOSITORY,
      useFactory: process.env.PERSISTENCE === 'postgres'
        ? () => createSessoesRepository([])
        : (db: SqliteDatabase) => createSqliteSessoesRepository(db),
      inject: process.env.PERSISTENCE === 'postgres' ? [] : [SqliteDatabase],
    },
  ],
})
export class GradeSessoesModule {}
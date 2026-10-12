import { Global, Module } from '@nestjs/common';
import { SqliteDatabase } from './sqlite-database';

@Global()
@Module({ providers: [SqliteDatabase], exports: [SqliteDatabase] })
export class DatabaseModule {}

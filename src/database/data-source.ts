import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { IngressoOrmEntity } from '../modules/acessos/entities/ingresso.orm.entity';
import { InscricaoOrmEntity } from '../modules/inscricoes/entities/inscricao.orm.entity';
import { SessaoLotacaoOrmEntity } from '../modules/lotacao/entities/sessao-lotacao.orm.entity';

export function createAppDataSource(): DataSource {
  return new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT || 5432),
    username: process.env.DB_USER || 'totaleventos',
    password: process.env.DB_PASSWORD || 'totaleventos',
    database: process.env.DB_NAME || 'totaleventos',
    synchronize: false,
    migrationsRun: process.env.DB_MIGRATIONS_RUN !== 'false',
    migrations: [__dirname + '/migrations/*.js'],
    entities: [IngressoOrmEntity, InscricaoOrmEntity, SessaoLotacaoOrmEntity],
  });
}

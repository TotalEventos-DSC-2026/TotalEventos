import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateCheckInTables1710000000000 implements MigrationInterface {
  name = 'CreateCheckInTables1710000000000';

  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE IF NOT EXISTS sessoes (
        sessao_id varchar(255) PRIMARY KEY,
        evento_id varchar(255) NOT NULL,
        titulo varchar(255) NOT NULL,
        data varchar(10) NOT NULL,
        hora_inicio varchar(5) NOT NULL,
        hora_fim varchar(5) NOT NULL,
        sala varchar(255) NOT NULL,
        publicada boolean NOT NULL,
        ativa boolean NOT NULL,
        created_at timestamptz NOT NULL,
        updated_at timestamptz NOT NULL
      )
    `);
    await queryRunner.query(`
      CREATE TABLE IF NOT EXISTS sessoes_lotacao (
        sessao_id varchar(255) PRIMARY KEY,
        capacidade_maxima integer NOT NULL CHECK (capacidade_maxima >= 0),
        ocupacao_atual integer NOT NULL CHECK (ocupacao_atual >= 0),
        updated_at timestamptz NOT NULL
      )
    `);
    await queryRunner.query(`
      CREATE TABLE IF NOT EXISTS ingressos (
        ingresso_id varchar(255) PRIMARY KEY,
        participante_id varchar(255) NOT NULL,
        sessao_id varchar(255) NOT NULL,
        status varchar(32) NOT NULL,
        codigo_qr varchar(255) NOT NULL UNIQUE,
        created_at timestamptz NOT NULL,
        updated_at timestamptz NOT NULL
      )
    `);
    await queryRunner.query(`
      CREATE TABLE IF NOT EXISTS inscricoes (
        inscricao_id varchar(255) PRIMARY KEY,
        participante_id varchar(255) NOT NULL,
        sessao_id varchar(255) NOT NULL,
        status varchar(32) NOT NULL,
        created_at timestamptz NOT NULL,
        updated_at timestamptz NOT NULL
      )
    `);
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE IF EXISTS inscricoes');
    await queryRunner.query('DROP TABLE IF EXISTS ingressos');
    await queryRunner.query('DROP TABLE IF EXISTS sessoes_lotacao');
  }
}

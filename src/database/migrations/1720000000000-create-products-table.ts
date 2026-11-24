import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateProductsTable1720000000000 implements MigrationInterface {
  name = 'CreateProductsTable1720000000000';

  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE IF NOT EXISTS products (
        product_id varchar(36) PRIMARY KEY,
        name varchar(255) NOT NULL,
        deleted_at timestamptz
      )
    `);
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE IF EXISTS products');
  }
}

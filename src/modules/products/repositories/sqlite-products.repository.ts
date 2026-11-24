import { Injectable } from '@nestjs/common';
import { SqliteDatabase } from '../../../database/sqlite-database';
import { Product } from '../entities/product.entity';
import type { ProductsRepository } from './products.repository.interface';

type Row = { product_id: string; name: string; deleted_at: string | null };

@Injectable()
export class SqliteProductsRepository implements ProductsRepository {
  constructor(private readonly db: SqliteDatabase) {}

  async findActiveById(productId: string): Promise<Product | null> {
    const row = this.db.connection
      .prepare('SELECT product_id, name, deleted_at FROM products WHERE product_id = ? AND deleted_at IS NULL')
      .get(productId) as Row | undefined;

    return row
      ? new Product(row.product_id, row.name, null)
      : null;
  }
}

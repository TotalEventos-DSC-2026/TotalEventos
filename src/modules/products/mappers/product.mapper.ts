import { Product } from '../entities/product.entity';
import { ProductOrmEntity } from '../entities/product.orm.entity';

export class ProductMapper {
  static toDomain(row: ProductOrmEntity): Product {
    return new Product(row.productId, row.name, row.deletedAt ?? null);
  }

  static toOrm(product: Product): ProductOrmEntity {
    const row = new ProductOrmEntity();
    row.productId = product.productId;
    row.name = product.name;
    row.deletedAt = product.deletedAt;
    return row;
  }
}

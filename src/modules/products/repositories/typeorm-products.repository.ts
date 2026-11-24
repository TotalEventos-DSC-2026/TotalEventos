import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource, IsNull, Repository } from 'typeorm';
import { ProductOrmEntity } from '../entities/product.orm.entity';
import { ProductMapper } from '../mappers/product.mapper';
import type { ProductsRepository } from './products.repository.interface';
import type { Product } from '../entities/product.entity';

@Injectable()
export class TypeOrmProductsRepository implements ProductsRepository {
  private readonly repository: Repository<ProductOrmEntity>;

  constructor(@InjectDataSource() dataSource: DataSource) {
    this.repository = dataSource.getRepository(ProductOrmEntity);
  }

  async findActiveById(productId: string): Promise<Product | null> {
    const row = await this.repository.findOneBy({
      productId,
      deletedAt: IsNull(),
    });
    return row ? ProductMapper.toDomain(row) : null;
  }
}

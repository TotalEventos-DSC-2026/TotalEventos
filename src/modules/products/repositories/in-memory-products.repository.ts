import { Injectable } from '@nestjs/common';
import { Product } from '../entities/product.entity';
import type { ProductsRepository } from './products.repository.interface';

@Injectable()
export class InMemoryProductsRepository implements ProductsRepository {
  private readonly products = new Map<string, Product>();

  add(product: Product): void {
    this.products.set(product.productId, product);
  }

  async findActiveById(productId: string): Promise<Product | null> {
    const product = this.products.get(productId);
    return product?.isActive() ? product : null;
  }
}

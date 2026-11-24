import { Product } from '../entities/product.entity';

export const PRODUCTS_REPOSITORY = 'PRODUCTS_REPOSITORY';

export interface ProductsRepository {
  findActiveById(productId: string): Promise<Product | null>;
  save(product: Product): Promise<Product>;
}

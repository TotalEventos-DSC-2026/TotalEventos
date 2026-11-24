import { Product } from '../entities/product.entity';
import { ProductResponseDto } from '../dto/product-response.dto';

export function toProductResponse(product: Product): ProductResponseDto {
  return {
    productId: product.productId,
    name: product.name,
  };
}

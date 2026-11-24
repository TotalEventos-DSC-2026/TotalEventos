import { Inject, Injectable } from '@nestjs/common';
import { ProductLookupFailedException } from '../../../common/exceptions/product-lookup-failed.exception';
import { ProductNotFoundException } from '../../../common/exceptions/product-not-found.exception';
import { toProductResponse } from '../mappers/product-response.mapper';
import {
  PRODUCTS_REPOSITORY,
  type ProductsRepository,
} from '../repositories/products.repository.interface';

@Injectable()
export class ProductsService {
  constructor(
    @Inject(PRODUCTS_REPOSITORY)
    private readonly productsRepository: ProductsRepository,
  ) {}

  async getProductById(productId: string) {
    try {
      const product = await this.productsRepository.findActiveById(productId);
      if (!product) {
        throw new ProductNotFoundException();
      }
      return toProductResponse(product);
    } catch (error) {
      if (error instanceof ProductNotFoundException) {
        throw error;
      }
      throw new ProductLookupFailedException(error);
    }
  }
}

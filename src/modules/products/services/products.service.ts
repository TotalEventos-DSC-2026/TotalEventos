import { Inject, Injectable } from '@nestjs/common';
import { ProductLookupFailedException } from '../../../common/exceptions/product-lookup-failed.exception';
import { ProductNotFoundException } from '../../../common/exceptions/product-not-found.exception';
import { InvalidProductNameException } from '../../../common/exceptions/invalid-product-name.exception';
import { ProductUpdateFailedException } from '../../../common/exceptions/product-update-failed.exception';
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

  async updateProductById(productId: string, name: string) {
    if (typeof name !== 'string' || !name.trim()) {
      throw new InvalidProductNameException();
    }

    try {
      const product = await this.productsRepository.findActiveById(productId);
      if (!product) {
        throw new ProductNotFoundException();
      }

      product.name = name.trim();
      await this.productsRepository.save(product);
      return toProductResponse(product);
    } catch (error) {
      if (
        error instanceof ProductNotFoundException ||
        error instanceof InvalidProductNameException
      ) {
        throw error;
      }
      throw new ProductUpdateFailedException(error);
    }
  }
}

import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { InvalidProductIdException } from '../../../common/exceptions/invalid-product-id.exception';
import { ProductsService } from '../services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get(':productId')
  getProduct(
    @Param(
      'productId',
      new ParseUUIDPipe({
        exceptionFactory: () => new InvalidProductIdException(),
      }),
    )
    productId: string,
  ) {
    return this.productsService.getProductById(productId);
  }
}

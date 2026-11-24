import { Body, Controller, Get, Param, ParseUUIDPipe, Patch } from '@nestjs/common';
import { InvalidProductIdException } from '../../../common/exceptions/invalid-product-id.exception';
import { ProductsService } from '../services/products.service';
import { UpdateProductRequestDto } from '../dto/update-product-request.dto';

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

  @Patch(':productId')
  updateProduct(
    @Param(
      'productId',
      new ParseUUIDPipe({
        exceptionFactory: () => new InvalidProductIdException(),
      }),
    )
    productId: string,
    @Body() dto: UpdateProductRequestDto,
  ) {
    return this.productsService.updateProductById(productId, dto.name);
  }
}

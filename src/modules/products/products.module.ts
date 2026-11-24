import { Module } from '@nestjs/common';
import { ProductsController } from './controllers/products.controller';
import { ProductsService } from './services/products.service';
import { PRODUCTS_REPOSITORY } from './repositories/products.repository.interface';
import { SqliteProductsRepository } from './repositories/sqlite-products.repository';
import { TypeOrmProductsRepository } from './repositories/typeorm-products.repository';

@Module({
  controllers: [ProductsController],
  providers: [
    ProductsService,
    {
      provide: PRODUCTS_REPOSITORY,
      useClass: process.env.PERSISTENCE === 'postgres'
        ? TypeOrmProductsRepository
        : SqliteProductsRepository,
    },
  ],
})
export class ProductsModule {}

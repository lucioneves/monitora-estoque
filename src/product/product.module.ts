import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsControllerTsController } from 'src/products.controller.ts/products.controller.ts.controller';
import { ProductsService } from 'src/products/products.service';

@Module({
    imports: [TypeOrmModule.forFeature([ProductsControllerTsController])],
    controllers: [ProductsControllerTsController],
    providers: [ProductsService],
})
export class ProductModule {}

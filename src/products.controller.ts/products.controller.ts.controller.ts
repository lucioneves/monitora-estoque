import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('products.controller.ts')
export class ProductsControllerTsController {
    constructor(private readonly productsService: ProductsControllerTsController) {}

    @Post()
    async create(@Body() product: ProductsControllerTsController): Promise<ProductsControllerTsController> {
        return this.productsService.create(product);
    }

    @Get()
    async findAll(): Promise<ProductsControllerTsController[]> {
        return this.productsService.findAll();
    }
}



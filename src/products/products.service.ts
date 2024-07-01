import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(ProductsService)
        private productsReposytory: Repository<ProductsService>,
    ) {}

    async create(product: ProductsService): Promise<ProductsService> {
        return this.productsReposytory.save(product)
    }

    async findAll(): Promise<ProductsService[]> {
        return this.productsReposytory.find();
    }
}

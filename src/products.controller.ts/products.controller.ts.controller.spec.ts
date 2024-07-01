import { Test, TestingModule } from '@nestjs/testing';
import { ProductsControllerTsController } from './products.controller.ts.controller';

describe('ProductsControllerTsController', () => {
  let controller: ProductsControllerTsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsControllerTsController],
    }).compile();

    controller = module.get<ProductsControllerTsController>(ProductsControllerTsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

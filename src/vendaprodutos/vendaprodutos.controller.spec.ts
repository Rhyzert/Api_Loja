import { Test, TestingModule } from '@nestjs/testing';
import { VendaprodutosController } from './vendaprodutos.controller';
import { VendaprodutosService } from './vendaprodutos.service';

describe('VendaprodutosController', () => {
  let controller: VendaprodutosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VendaprodutosController],
      providers: [VendaprodutosService],
    }).compile();

    controller = module.get<VendaprodutosController>(VendaprodutosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

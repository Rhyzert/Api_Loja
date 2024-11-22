import { Test, TestingModule } from '@nestjs/testing';
import { VendaprodutosService } from './vendaprodutos.service';

describe('VendaprodutosService', () => {
  let service: VendaprodutosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VendaprodutosService],
    }).compile();

    service = module.get<VendaprodutosService>(VendaprodutosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

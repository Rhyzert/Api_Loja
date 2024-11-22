import { Module } from '@nestjs/common';
import { VendaprodutosService } from './vendaprodutos.service';
import { VendaprodutosController } from './vendaprodutos.controller';

@Module({
  controllers: [VendaprodutosController],
  providers: [VendaprodutosService],
})
export class VendaprodutosModule {}

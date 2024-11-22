import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstoqueModule } from './estoque/estoque.module';
import { ProdutoModule } from './produto/produto.module';
import { VendaModule } from './venda/venda.module';
import { LojaModule } from './loja/loja.module';
import { VendaprodutosModule } from './vendaprodutos/vendaprodutos.module';

@Module({
  imports: [EstoqueModule, ProdutoModule, VendaModule, LojaModule, VendaprodutosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

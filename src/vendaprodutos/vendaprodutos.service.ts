import { Injectable } from '@nestjs/common';
import { CreateVendaprodutoDto } from './dto/create-vendaproduto.dto';
import { UpdateVendaprodutoDto } from './dto/update-vendaproduto.dto';
import { Vendaproduto } from './entities/vendaproduto.entity';

@Injectable()
export class VendaprodutosService {
  create(createVendaprodutoDto: CreateVendaprodutoDto) {
    return 'This action adds a new vendaproduto';
  }

  findAll() {
    return `This action returns all vendaprodutos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vendaproduto`;
  }

  update(id: number, updateVendaprodutoDto: UpdateVendaprodutoDto) {
    return `This action updates a #${id} vendaproduto`;
  }

  remove(id: number) {
    return `This action removes a #${id} vendaproduto`;
  }
}

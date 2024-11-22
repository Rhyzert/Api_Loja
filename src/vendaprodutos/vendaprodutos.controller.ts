import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VendaprodutosService } from './vendaprodutos.service';
import { CreateVendaprodutoDto } from './dto/create-vendaproduto.dto';
import { UpdateVendaprodutoDto } from './dto/update-vendaproduto.dto';

@Controller('vendaprodutos')
export class VendaprodutosController {
  constructor(private readonly vendaprodutosService: VendaprodutosService) {}

  @Post()
  create(@Body() createVendaprodutoDto: CreateVendaprodutoDto) {
    return this.vendaprodutosService.create(createVendaprodutoDto);
  }

  @Get()
  findAll() {
    return this.vendaprodutosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vendaprodutosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVendaprodutoDto: UpdateVendaprodutoDto) {
    return this.vendaprodutosService.update(+id, updateVendaprodutoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vendaprodutosService.remove(+id);
  }
}

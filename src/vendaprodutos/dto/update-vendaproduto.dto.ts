import { PartialType } from '@nestjs/swagger';
import { CreateVendaprodutoDto } from './create-vendaproduto.dto';

export class UpdateVendaprodutoDto extends PartialType(CreateVendaprodutoDto) {}

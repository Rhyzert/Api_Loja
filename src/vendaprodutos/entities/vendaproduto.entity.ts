import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    OneToMany,
    JoinColumn,
    CreateDateColumn,
    OneToOne,
  } from 'typeorm';

  import { Venda } from 'src/venda/entities/venda.entity';
  import { Estoque } from 'src/estoque/entities/estoque.entity';
  import { Produto } from 'src/produto/entities/produto.entity';
  
@Entity('vendaproduto')
export class Vendaproduto {  
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @JoinColumn ({ name: 'venda_id'})
    venda_id: Venda;

    @JoinColumn({ name: 'produto_id' })
    produto_id: Produto;

    @Column({ type: 'text', nullable: false})
    categoria: string;

    @Column({ type: 'text', nullable: false})
    loja: string;
  
    @Column({ type: 'timestamp' })
    data: Date;
  
    @CreateDateColumn({ name: 'criado_em', type: 'timestamp' })
    criadoEm: Date;
}

import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    JoinColumn,
    OneToOne,
    OneToMany,
    CreateDateColumn,
  } from 'typeorm';
import { Estoque } from 'src/estoque/entities/estoque.entity';
  

  @Entity('venda')
export class Venda { 
     @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column({ type: 'text', nullable: false })
    loja: string;

    @CreateDateColumn({ type: 'timestamp' })
    criadoEm: Date;
  }


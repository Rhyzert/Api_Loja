import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    JoinColumn,
    OneToOne,
    CreateDateColumn,
  } from 'typeorm';
  

  @Entity('produto')
export class Produto { 
     @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column({ type: 'text', nullable: false })
    descricao: string;
  
    @Column({ type: 'text', nullable: false })
    categoria: string;
  
    @CreateDateColumn({ type: 'timestamp' })
    criadoEm: Date;
  }


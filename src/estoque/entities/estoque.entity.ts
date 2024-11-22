import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    JoinColumn,
    OneToOne,
    CreateDateColumn,
  } from 'typeorm';
  

  @Entity('estoque')
export class Estoque { 
     @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column({ type: 'text', nullable: false })
    descricao: string;
  
    @Column({ type: 'int', nullable: false })
    quantidade: number;
  
    @CreateDateColumn({ type: 'timestamp' })
    criadoEm: Date;
  }


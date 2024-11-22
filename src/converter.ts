import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    JoinColumn,
    OneToOne,
    CreateDateColumn,
  } from 'typeorm';
  
  class DataTransfer {
    private dbUrl: string;
  
    constructor(dbUrl: string) {
      this.dbUrl = dbUrl; 
    }
  
    private transformarParaJSON(objeto: Record<string, any>): string {
      try {
        return JSON.stringify(objeto);
      } catch (error) {
        throw new Error("Falha ao transformar o objeto em JSON: " + error.message);
      }
    }
  
    async enviarParaBanco(objeto: Record<string, any>): Promise<any> {
      const { _id, _rev, ...dados } = objeto; 
      const json = this.transformarParaJSON(objeto);
  
      try {
        const method = _id ? "PUT" : "POST";
        const url = _id ? `${this.dbUrl}/${encodeURIComponent(_id)}` : this.dbUrl;
  
        const resposta = await fetch(url, {
          method,
          headers: {
            "Content-Type": "application/json",
          },
          body: json,
        });
  
        if (!resposta.ok) {
          throw new Error(`Erro ao enviar dados: ${resposta.statusText}`);
        }
  
        return await resposta.json();
      } catch (error) {
        throw new Error("Falha ao enviar dados para o banco: " + error.message);
      }
    }
  }
  
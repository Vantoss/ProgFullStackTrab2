import { Repository } from 'typeorm';
import { Despesa } from '../model/Despesa';

export class DespesaService {
  private repository: Repository<Despesa>;

  constructor(repository: Repository<Despesa>) {
    this.repository = repository;
  }

  async inserir(despesa: Despesa): Promise<Despesa> {
    if(!despesa.tipo || !despesa.data || !despesa.valor) {
        throw ({id: 400, msg: "Falta dados obrigatorios"});    
    }
    if(isNaN(despesa.valor)){
        throw ({id: 400, msg: "Valor invalido"});
    }
    let dataConvertida = new Date(despesa.data);
    if(isNaN(dataConvertida.getTime())){
        throw ({id: 400, msg: "Data invalida"});
    }
    let d = new Date();
    if(dataConvertida > d){
        throw ({id: 400, msg: "Data nao pode ser maior que a data atual"});
    }
    return await this.repository.save(despesa);
  }

  async listar(): Promise<Despesa[]> {
    return await this.repository.find();
  }

  async buscarPorId(id: number): Promise<Despesa> {
    let despesa = await this.repository.findOneBy({id: id});
    if(!despesa) {
        throw ({id: 404, msg: "Despesa nao encontrada"});    
    }
    return despesa;
  }

  async atualizar(id: number, despesa: Despesa): Promise<Despesa> {
    if(!despesa.tipo || !despesa.data || !despesa.valor) {
        throw ({id: 400, msg: "Falta dados obrigatorios"});    
    }
    if(isNaN(despesa.valor)){
        throw ({id: 400, msg: "Valor invalido"});
    }
    let dataConvertida = new Date(despesa.data);
    if(isNaN(dataConvertida.getTime())){
        throw ({id: 400, msg: "Data invalida"});
    }
    let d = new Date();
    if(dataConvertida > d){
        throw ({id: 400, msg: "Data nao pode ser maior que a data atual"});
    }
    let despesaAlt = await this.repository.findOneBy({id: id});
    console.log("Despesa ", despesaAlt)
    if (!despesaAlt || despesaAlt == null) {
      throw ({id: 404, msg: "Despesa nao encontrada"});    
    }    
    else {
      despesaAlt.tipo = despesa.tipo;
      despesaAlt.data = despesa.data;
      despesaAlt.valor = despesa.valor;
      return await this.repository.save(despesaAlt);
    }
  }

  async deletar(id: number): Promise<Despesa> {
    let despesaDeletada = await this.repository.findOneBy({id: id});
    if (!despesaDeletada) {
        throw ({id: 404, msg: "Despesa nao encontrada"});    
    }    
    else {
      await this.repository.remove(despesaDeletada);
      return despesaDeletada;
    }
  }
}
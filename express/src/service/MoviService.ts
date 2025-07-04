import { Repository } from 'typeorm';
import { Movimentacoes } from '../model/Movimentacoes';

export class MoviService {
  private repository: Repository<Movimentacoes>;

  constructor(repository: Repository<Movimentacoes>) {
    this.repository = repository;
  }

  async inserir(movi: Movimentacoes): Promise<Movimentacoes> {
    if(!movi.nome || !movi.categoria || !movi.data || !movi.valor || !movi.tipo) {
        throw ({id: 400, msg: "Falta dados obrigatorios"});    
    }
    if(isNaN(movi.valor)){
        throw ({id: 400, msg: "Valor invalido"});
    }
    let dataConvertida = new Date(movi.data);
    if(isNaN(dataConvertida.getTime())){
        throw ({id: 400, msg: "Data invalida"});
    }
    let d = new Date();
    if(dataConvertida > d){
        throw ({id: 400, msg: "Data nao pode ser maior que a data atual"});
    }
    return await this.repository.save(movi);
  }

  async listar(): Promise<Movimentacoes[]> {
    return await this.repository.find();
  }

  async buscarPorId(id: number): Promise<Movimentacoes> {
    let movi = await this.repository.findOneBy({id: id});
    if(!movi) {
        throw ({id: 404, msg: "Movimentacao nao encontrada"});    
    }
    return movi;
  }

  async atualizar(id: number, movi: Movimentacoes): Promise<Movimentacoes> {
    if(!movi.nome || !movi.categoria || !movi.data || !movi.valor || !movi.tipo) {
        throw ({id: 400, msg: "Falta dados obrigatorios"});    
    }
    if(isNaN(movi.valor)){
        throw ({id: 400, msg: "Valor invalido"});
    }
    let dataConvertida = new Date(movi.data);
    if(isNaN(dataConvertida.getTime())){
        throw ({id: 400, msg: "Data invalida"});
    }
    let d = new Date();
    if(dataConvertida > d){
        throw ({id: 400, msg: "Data nao pode ser maior que a data atual"});
    }
    let moviAlt = await this.repository.findOneBy({id: id});
    console.log("Movimentacao ", moviAlt)
    if (!moviAlt || moviAlt == null) {
      throw ({id: 404, msg: "Movimentacao nao encontrada"});    
    }    
    else {
      moviAlt.nome = movi.nome;
      moviAlt.categoria = movi.categoria;
      moviAlt.data = movi.data;
      moviAlt.valor = movi.valor;
      moviAlt.tipo = movi.tipo;
      return await this.repository.save(moviAlt);
    }
  }

  async deletar(id: number): Promise<Movimentacoes> {
    let moviDeletada = await this.repository.findOneBy({id: id});
    if (!moviDeletada) {
        throw ({id: 404, msg: "Movimentacao nao encontrada"});    
    }    
    else {
      await this.repository.remove(moviDeletada);
      return moviDeletada;
    }
  }
}
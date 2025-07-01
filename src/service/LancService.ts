import { Repository } from 'typeorm';
import { Lancamentos } from '../model/Lancamentos';
/*import { Despesa } from '../model/Despesa';
import { DespesaService } from '../service/DespesaService';
import { DespesaRepository } from '../repository/DespesaRepository';
import { DespesaController } from '../controller/DespesaController';*/

export class LancService {
  private repository: Repository<Lancamentos>;

  constructor(repository: Repository<Lancamentos>) {
    this.repository = repository;
  }

  async inserir(lanc: Lancamentos): Promise<Lancamentos> {
    if(!lanc.nome || !lanc.categoria || !lanc.prazo || !lanc.valor) {
        throw ({id: 400, msg: "Falta dados obrigatorios"});    
    }
    if(isNaN(lanc.valor)){
        throw ({id: 400, msg: "Valor invalido"});
    }
    let prazoConvertido = new Date(lanc.prazo);
    if(isNaN(prazoConvertido.getTime())){
        throw ({id: 400, msg: "Prazo invalido"});
    }
    let d = new Date();
    if(prazoConvertido < d){
        throw ({id: 400, msg: "Prazo nao pode ser menor que a data atual"});
    }
    return await this.repository.save(lanc);
  }

  async listar(): Promise<Lancamentos[]> {
    return await this.repository.find();
  }

  async buscarPorId(id: number): Promise<Lancamentos> {
    let lanc = await this.repository.findOneBy({id: id});
    if(!lanc) {
        throw ({id: 404, msg: "Lancamento nao encontrado"});    
    }
    return lanc;
  }

  async atualizar(id: number, lanc: Lancamentos): Promise<Lancamentos> {
    if(!lanc.nome || !lanc.categoria || !lanc.prazo || !lanc.valor) {
        throw ({id: 400, msg: "Falta dados obrigatorios"});    
    }
    if(isNaN(lanc.valor)){
        throw ({id: 400, msg: "Valor invalido"});
    }
    let prazoConvertido = new Date(lanc.prazo);
    if(isNaN(prazoConvertido.getTime())){
        throw ({id: 400, msg: "Prazo invalido"});
    }
    let d = new Date();
    if(prazoConvertido < d){
        throw ({id: 400, msg: "Prazo nao pode ser menor que a data atual"});
    }
    let lancAlt = await this.repository.findOneBy({id: id});
    console.log("Lancamento ", lancAlt)
    if (!lancAlt || lancAlt == null) {
      throw ({id: 404, msg: "Lancamento nao encontrado"});    
    }    
    else {
      lancAlt.nome = lanc.nome;
      lancAlt.categoria = lanc.categoria;
      lancAlt.prazo = lanc.prazo;
      lancAlt.valor = lanc.valor;
      return await this.repository.save(lancAlt);
    }
  }

  async deletar(id: number): Promise<Lancamentos> {
    let lancDeletado = await this.repository.findOneBy({id: id});
    if (!lancDeletado) {
        throw ({id: 404, msg: "Lancamento nao encontrado"});    
    }    
    else {
      await this.repository.remove(lancDeletado);
      return lancDeletado;
    }
  }

  /*async baixar(idConta: number): Promise<Despesa> {
    let conta = await this.repository.findOneBy({ id: idConta });

    if (!conta) {
      throw ({id: 404, msg: "Conta nao encontrada"});
    }

    const novaDespesa = new Despesa({
      tipo: conta.tipo,
      data: new Date(), // data atual como data de pagamento
      valor: conta.valor,
    });
    await new DespesaController(novaDespesa);
    await this.repository.remove(conta);

    return await novaDespesa;
  }*/
}
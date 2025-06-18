import { Repository } from 'typeorm';
import { Conta } from '../model/Conta';
/*import { Despesa } from '../model/Despesa';
import { DespesaService } from '../service/DespesaService';
import { DespesaRepository } from '../repository/DespesaRepository';
import { DespesaController } from '../controller/DespesaController';*/

export class ContaService {
  private repository: Repository<Conta>;

  constructor(repository: Repository<Conta>) {
    this.repository = repository;
  }

  async inserir(conta: Conta): Promise<Conta> {
    if(!conta.tipo || !conta.prazo || !conta.valor) {
        throw ({id: 400, msg: "Falta dados obrigatorios"});    
    }
    if(isNaN(conta.valor)){
        throw ({id: 400, msg: "Valor invalido"});
    }
    let prazoConvertido = new Date(conta.prazo);
    if(isNaN(prazoConvertido.getTime())){
        throw ({id: 400, msg: "Prazo invalido"});
    }
    let d = new Date();
    if(prazoConvertido < d){
        throw ({id: 400, msg: "Prazo nao pode ser menor que a data atual"});
    }
    return await this.repository.save(conta);
  }

  async listar(): Promise<Conta[]> {
    return await this.repository.find();
  }

  async buscarPorId(id: number): Promise<Conta> {
    let conta = await this.repository.findOneBy({id: id});
    if(!conta) {
        throw ({id: 404, msg: "Conta nao encontrada"});    
    }
    return conta;
  }

  async atualizar(id: number, conta: Conta): Promise<Conta> {
    if(!conta.tipo || !conta.prazo || !conta.valor) {
        throw ({id: 400, msg: "Falta dados obrigatorios"});    
    }
    if(isNaN(conta.valor)){
        throw ({id: 400, msg: "Valor invalido"});
    }
    let prazoConvertido = new Date(conta.prazo);
    if(isNaN(prazoConvertido.getTime())){
        throw ({id: 400, msg: "Prazo invalido"});
    }
    let d = new Date();
    if(prazoConvertido < d){
        throw ({id: 400, msg: "Prazo nao pode ser menor que a data atual"});
    }
    let contaAlt = await this.repository.findOneBy({id: id});
    console.log("conta ", contaAlt)
    if (!contaAlt || contaAlt == null) {
      throw ({id: 404, msg: "Conta nao encontrada"});    
    }    
    else {
      contaAlt.tipo = conta.tipo;
      contaAlt.prazo = conta.prazo;
      contaAlt.valor = conta.valor;
      return await this.repository.save(contaAlt);
    }
  }

  async deletar(id: number): Promise<Conta> {
    let contaDeletada = await this.repository.findOneBy({id: id});
    if (!contaDeletada) {
        throw ({id: 404, msg: "Conta nao encontrada"});    
    }    
    else {
      await this.repository.remove(contaDeletada);
      return contaDeletada;
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
import { Conta } from '../model/Conta';
/*import { Despesa } from '../model/Despesa';
import { DespesaRepository } from '../repository/DespesaRepository';*/

export class ContaRepository {
  private listacontas: Conta[] = [];
  private proximoId: number = 1;

  inserir(conta: Omit<Conta, 'id'>): Conta {
    const novoConta = new Conta(
      this.proximoId++,
      conta.tipo,
      conta.prazo,
      conta.valor
    );
    this.listacontas.push(novoConta);
    return novoConta;
  }

  listar(): Conta[] {
    return [...this.listacontas]; //clone da lista
  }

  buscarPorId(id: number): Conta | undefined {
    return this.listacontas.find(p => p.id === id);
  }

  atualizar(id: number, conta: Omit<Conta, 'id'>): Conta | undefined {
    const index = this.listacontas.findIndex(p => p.id === id);
    if (index === -1) return undefined;

    const contaAtualizado = new Conta(
      id,
      conta.tipo,
      conta.prazo,
      conta.valor
    );
    this.listacontas[index] = contaAtualizado;
    return contaAtualizado;
  }

  deletar(id: number): Conta | undefined {
    const index = this.listacontas.findIndex(p => p.id === id);
    if (index === -1) return undefined;

    return this.listacontas.splice(index, 1).at(0);
  }

  /*baixar(id: number): Despesa | undefined {
    const index = this.listacontas.findIndex(p => p.id === id);
    if (index === -1) return undefined;

    const contapaga = new Despesa(
      tipo: Conta.tipo,
      data: new Date(), // data atual como data de pagamento
      valor: Conta.valor,
    )
    this.listacontas.splice(index, 1).at(0);
    return contapaga;
  }*/
}
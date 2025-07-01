import { Lancamentos } from '../model/Lancamentos';
/*import { Despesa } from '../model/Despesa';
import { DespesaRepository } from '../repository/DespesaRepository';*/

export class LancRepository {
  private listaLancamentos: Lancamentos[] = [];
  private proximoId: number = 1;

  inserir(lanc: Omit<Lancamentos, 'id'>): Lancamentos {
    const novoLanc = new Lancamentos(
      this.proximoId++,
      lanc.usuario,
      lanc.nome,
      lanc.categoria,
      lanc.prazo,
      lanc.valor
    );
    this.listaLancamentos.push(novoLanc);
    return novoLanc;
  }

  listar(): Lancamentos[] {
    return [...this.listaLancamentos]; //clone da lista
  }

  buscarPorId(id: number): Lancamentos | undefined {
    return this.listaLancamentos.find(p => p.id === id);
  }

  atualizar(id: number, lanc: Omit<Lancamentos, 'id'>): Lancamentos | undefined {
    const index = this.listaLancamentos.findIndex(p => p.id === id);
    if (index === -1) return undefined;

    const lancAtualizado = new Lancamentos(
      id,
      lanc.usuario,
      lanc.nome,
      lanc.categoria,
      lanc.prazo,
      lanc.valor
    );
    this.listaLancamentos[index] = lancAtualizado;
    return lancAtualizado;
  }

  deletar(id: number): Lancamentos | undefined {
    const index = this.listaLancamentos.findIndex(p => p.id === id);
    if (index === -1) return undefined;

    return this.listaLancamentos.splice(index, 1).at(0);
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
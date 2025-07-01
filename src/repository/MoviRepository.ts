import { Movimentacoes } from '../model/Movimentacoes';

export class MoviRepository {
  private listaMovimentacoes: Movimentacoes[] = [];
  private proximoId: number = 1;

  inserir(movi: Omit<Movimentacoes, 'id'>): Movimentacoes {
    const novaMovi = new Movimentacoes(
      this.proximoId++,
      movi.usuario,
      movi.nome,
      movi.categoria,
      movi.data,
      movi.valor,
      movi.tipo
    );
    this.listaMovimentacoes.push(novaMovi);
    return novaMovi;
  }

  listar(): Movimentacoes[] {
    return [...this.listaMovimentacoes]; //clone da lista
  }

  buscarPorId(id: number): Movimentacoes | undefined {
    return this.listaMovimentacoes.find(p => p.id === id);
  }

  atualizar(id: number, movi: Omit<Movimentacoes, 'id'>): Movimentacoes | undefined {
    const index = this.listaMovimentacoes.findIndex(p => p.id === id);
    if (index === -1) return undefined;

    const moviAtualizado = new Movimentacoes(
      id,
      movi.usuario,
      movi.nome,
      movi.categoria,
      movi.data,
      movi.valor,
      movi.tipo
    );
    this.listaMovimentacoes[index] = moviAtualizado;
    return moviAtualizado;
  }

  deletar(id: number): Movimentacoes | undefined {
    const index = this.listaMovimentacoes.findIndex(p => p.id === id);
    if (index === -1) return undefined;

    return this.listaMovimentacoes.splice(index, 1).at(0);
  }
}
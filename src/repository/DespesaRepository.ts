import { Despesa } from '../model/Despesa';

export class DespesaRepository {
  private listadespesas: Despesa[] = [];
  private proximoId: number = 1;

  inserir(despesa: Omit<Despesa, 'id'>): Despesa {
    const novoDespesa = new Despesa(
      this.proximoId++,
      despesa.tipo,
      despesa.data,
      despesa.valor
    );
    this.listadespesas.push(novoDespesa);
    return novoDespesa;
  }

  listar(): Despesa[] {
    return [...this.listadespesas]; //clone da lista
  }

  buscarPorId(id: number): Despesa | undefined {
    return this.listadespesas.find(p => p.id === id);
  }

  atualizar(id: number, despesa: Omit<Despesa, 'id'>): Despesa | undefined {
    const index = this.listadespesas.findIndex(p => p.id === id);
    if (index === -1) return undefined;

    const despesaAtualizado = new Despesa(
      id,
      despesa.tipo,
      despesa.data,
      despesa.valor
    );
    this.listadespesas[index] = despesaAtualizado;
    return despesaAtualizado;
  }

  deletar(id: number): Despesa | undefined {
    const index = this.listadespesas.findIndex(p => p.id === id);
    if (index === -1) return undefined;

    return this.listadespesas.splice(index, 1).at(0);
  }
}
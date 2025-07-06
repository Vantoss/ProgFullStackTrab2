import { User } from "../model/User";

export class UserRepository {
  private listaUsers: User[] = [];
  private proximoId: number = 1;

  inserir(user: Omit<User, 'id'>): User {
    const novoUser = new User(
        this.proximoId++,
        user.nome,
        user.senha
    );
    this.listaUsers.push(novoUser);
    return novoUser;
  }

  listar(): User[] {
    return [...this.listaUsers]; //clone da lista
  }

  buscarPorId(id: number): User | undefined {
    return this.listaUsers.find(p => p.id === id);
  }

  atualizar(id: number, user: Omit<User, 'id'>): User | undefined {
    const index = this.listaUsers.findIndex(p => p.id === id);
    if (index === -1) return undefined;

    const userAtualizado = new User(
        id,
        user.nome,
        user.senha
    );
    this.listaUsers[index] = userAtualizado;
    return userAtualizado;
  }

  deletar(id: number): User | undefined {
    const index = this.listaUsers.findIndex(p => p.id === id);
    if (index === -1) return undefined;

    return this.listaUsers.splice(index, 1).at(0);
  }
}
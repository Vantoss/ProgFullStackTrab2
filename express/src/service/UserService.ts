import { Repository } from 'typeorm';
import { User } from '../model/User';

export class UserService {
  private repository: Repository<User>;

  constructor(repository: Repository<User>) {
    this.repository = repository;
  }

  async inserir(user: User): Promise<User> {
    if(!user.nome || !user.senha) {
        throw ({id: 400, msg: "Falta dados obrigatorios"});    
    }
    return await this.repository.save(user);
  }

  async listar(): Promise<User[]> {
    return await this.repository.find();
  }

  async buscarPorId(id: number): Promise<User> {
    let user = await this.repository.findOneBy({id: id});
    if(!user) {
        throw ({id: 404, msg: "Usuario nao encontrado"});    
    }
    return user;
  }

  async atualizar(id: number, user: User): Promise<User> {
    if(!user.nome || !user.senha) {
        throw ({id: 400, msg: "Falta dados obrigatorios"});    
    }
    let userAlt = await this.repository.findOneBy({id: id});
    console.log("User ", userAlt)
    if (!userAlt || userAlt == null) {
      throw ({id: 404, msg: "Usuario nao encontrado"});    
    }    
    else {
        userAlt.nome = user.nome;
        userAlt.senha = user.senha;
      return await this.repository.save(userAlt);
    }
  }

  async deletar(id: number): Promise<User> {
    let userDeletado = await this.repository.findOneBy({id: id});
    if (!userDeletado) {
        throw ({id: 404, msg: "Usuario nao encontrado"});    
    }    
    else {
      await this.repository.remove(userDeletado);
      return userDeletado;
    }
  }
}
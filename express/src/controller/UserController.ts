import { Request, Response } from 'express';
import { UserService } from '../service/UserService';

export class UserController {
  private service: UserService;

  constructor(service: UserService) {
    this.service = service;
  }

  inserir = async (req: Request, res: Response): Promise<void> => {
    const { nome, senha } = req.body;
    try{ 
        const novoUser = await this.service.inserir({ nome, senha });
        res.status(201).json(novoUser);
    }
    catch(err:any) {
        res.status(err.id).json({ error: err.msg });
    }
  };

  listar = async (_req: Request, res: Response): Promise<void> => {
    const users = await this.service.listar();
    res.json(users);
  };

  buscarPorId = async (req: Request, res: Response): Promise<void> => {
    const id = parseInt(req.params.id);
    try{ 
        const user = await this.service.buscarPorId(id);
        res.json(user);
    } catch (err: any) {
        res.status(err.id).json({ error: err.msg });
    }
  };

  atualizar = async (req: Request, res: Response): Promise<void> => {
    const id = parseInt(req.params.id);
    const { nome, senha } = req.body;

    try{ 
        const userAtualizado = await this.service.atualizar(id, { nome, senha });
        res.json(userAtualizado);
    } catch (err: any) {
        res.status(err.id).json({ error: err.msg });
    }
  };

  deletar = async (req: Request, res: Response): Promise<void> => {
    const id = parseInt(req.params.id);
    try{ 
        const user = await this.service.deletar(id);
        res.json(user);
    } catch (err: any) {
        res.status(err.id).json({ error: err.msg });
    }
  };
}
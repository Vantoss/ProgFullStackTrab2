import { Request, Response } from 'express';
import { MoviService } from '../service/MoviService';

export class MoviController {
  private service: MoviService;

  constructor(service: MoviService) {
    this.service = service;
  }

  inserir = async (req: Request, res: Response): Promise<void> => {
    const { nome, categoria, data, valor, tipo } = req.body;
    try{ 
        const novaMovi = await this.service.inserir({ nome, categoria, data, valor, tipo });
        res.status(201).json(novaMovi);
    }
    catch(err:any) {
        res.status(err.id).json({ error: err.msg });
    }
  };

  listar = async (_req: Request, res: Response): Promise<void> => {
    const movis = await this.service.listar();
    res.json(movis);
  };

  buscarPorId = async (req: Request, res: Response): Promise<void> => {
    const id = parseInt(req.params.id);
    try{ 
        const movi = await this.service.buscarPorId(id);
        res.json(movi);
    } catch (err: any) {
        res.status(err.id).json({ error: err.msg });
    }
  };

  atualizar = async (req: Request, res: Response): Promise<void> => {
    const id = parseInt(req.params.id);
    const { nome, categoria, data, valor, tipo } = req.body;

    try{ 
        const moviAtualizada = await this.service.atualizar(id, { nome, categoria, data, valor, tipo });
        res.json(moviAtualizada);
    } catch (err: any) {
        res.status(err.id).json({ error: err.msg });
    }
  };

  deletar = async (req: Request, res: Response): Promise<void> => {
    const id = parseInt(req.params.id);
    try{ 
        const movi = await this.service.deletar(id);
        res.json(movi);
    } catch (err: any) {
        res.status(err.id).json({ error: err.msg });
    }
  };
}
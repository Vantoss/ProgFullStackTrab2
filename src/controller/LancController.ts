import { Request, Response } from 'express';
import { LancService } from '../service/LancService';

export class LancController {
  private service: LancService;

  constructor(service: LancService) {
    this.service = service;
  }

  inserir = async (req: Request, res: Response): Promise<void> => {
    const { nome, categoria, prazo, valor } = req.body;
    try{ 
        const novoLanc = await this.service.inserir({ nome, categoria, prazo, valor });
        res.status(201).json(novoLanc);
    }
    catch(err:any) {
        res.status(err.id).json({ error: err.msg });
    }
  };

  listar = async (_req: Request, res: Response): Promise<void> => {
    const lancs = await this.service.listar();
    res.json(lancs);
  };

  buscarPorId = async (req: Request, res: Response): Promise<void> => {
    const id = parseInt(req.params.id);
    try{ 
        const lanc = await this.service.buscarPorId(id);
        res.json(lanc);
    } catch (err: any) {
        res.status(err.id).json({ error: err.msg });
    }
  };

  atualizar = async (req: Request, res: Response): Promise<void> => {
    const id = parseInt(req.params.id);
    const { nome, categoria, prazo, valor } = req.body;

    try{ 
        const lancAtualizado = await this.service.atualizar(id, { nome, categoria, prazo, valor });
        res.json(lancAtualizado);
    } catch (err: any) {
        res.status(err.id).json({ error: err.msg });
    }
  };

  deletar = async (req: Request, res: Response): Promise<void> => {
    const id = parseInt(req.params.id);
    try{ 
        const lanc = await this.service.deletar(id);
        res.json(lanc);
    } catch (err: any) {
        res.status(err.id).json({ error: err.msg });
    }
  };

  /*baixar = async (req: Request, res: Response): Promise<void> => {
    const id = parseInt(req.params.id);
    try{ 
        const despesa = await this.service.baixar(id);
        res.json(despesa);
    } catch (err: any) {
        res.status(err.id).json({ error: err.msg });
    }
  }*/
}
import { Request, Response } from 'express';
import { DespesaService } from '../service/DespesaService';

export class DespesaController {
  private service: DespesaService;

  constructor(service: DespesaService) {
    this.service = service;
  }

  inserir = async (req: Request, res: Response): Promise<void> => {
    const { tipo, data, valor } = req.body;
    try{ 
        const novaDespesa = await this.service.inserir({ tipo, data, valor });
        res.status(201).json(novaDespesa);
    }
    catch(err:any) {
        res.status(err.id).json({ error: err.msg });
    }
  };

  listar = async (_req: Request, res: Response): Promise<void> => {
    const despesas = await this.service.listar();
    res.json(despesas);
  };

  buscarPorId = async (req: Request, res: Response): Promise<void> => {
    const id = parseInt(req.params.id);
    try{ 
        const despesa = await this.service.buscarPorId(id);
        res.json(despesa);
    } catch (err: any) {
        res.status(err.id).json({ error: err.msg });
    }
  };

  atualizar = async (req: Request, res: Response): Promise<void> => {
    const id = parseInt(req.params.id);
    const { tipo, data, valor } = req.body;

    try{ 
        const despesaAtualizada = await this.service.atualizar(id, { tipo, data, valor });
        res.json(despesaAtualizada);
    } catch (err: any) {
        res.status(err.id).json({ error: err.msg });
    }
  };

  deletar = async (req: Request, res: Response): Promise<void> => {
    const id = parseInt(req.params.id);
    try{ 
        const despesa = await this.service.deletar(id);
        res.json(despesa);
    } catch (err: any) {
        res.status(err.id).json({ error: err.msg });
    }
  };
}
import { Request, Response } from 'express';
import { ContaService } from '../service/ContaService';

export class ContaController {
  private service: ContaService;

  constructor(service: ContaService) {
    this.service = service;
  }

  inserir = async (req: Request, res: Response): Promise<void> => {
    const { tipo, prazo, valor } = req.body;
    try{ 
        const novaConta = await this.service.inserir({ tipo, prazo, valor });
        res.status(201).json(novaConta);
    }
    catch(err:any) {
        res.status(err.id).json({ error: err.msg });
    }
  };

  listar = async (_req: Request, res: Response): Promise<void> => {
    const contas = await this.service.listar();
    res.json(contas);
  };

  buscarPorId = async (req: Request, res: Response): Promise<void> => {
    const id = parseInt(req.params.id);
    try{ 
        const conta = await this.service.buscarPorId(id);
        res.json(conta);
    } catch (err: any) {
        res.status(err.id).json({ error: err.msg });
    }
  };

  atualizar = async (req: Request, res: Response): Promise<void> => {
    const id = parseInt(req.params.id);
    const { tipo, prazo, valor } = req.body;

    try{ 
        const contaAtualizada = await this.service.atualizar(id, { tipo, prazo, valor });
        res.json(contaAtualizada);
    } catch (err: any) {
        res.status(err.id).json({ error: err.msg });
    }
  };

  deletar = async (req: Request, res: Response): Promise<void> => {
    const id = parseInt(req.params.id);
    try{ 
        const conta = await this.service.deletar(id);
        res.json(conta);
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
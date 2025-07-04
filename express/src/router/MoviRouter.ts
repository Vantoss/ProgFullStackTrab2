import { Router } from 'express';
import { MoviController } from '../controller/MoviController';

export const moviRotas = (controller: MoviController): Router => {
  const router = Router();

  router.post('/', controller.inserir);
  router.get('/', controller.listar);
  router.get('/:id', controller.buscarPorId);
  router.put('/:id', controller.atualizar);
  router.delete('/:id', controller.deletar);

  return router;
};
import express from 'express';
import { MoviRepository } from './repository/MoviRepository';
import { MoviService } from './service/MoviService';
import { MoviController } from './controller/MoviController';
import { moviRotas } from './router/MoviRouter';
import { LancRepository } from './repository/LancRepository';
import { LancService } from './service/LancService';
import { LancController } from './controller/LancController';
import { lancRotas } from './router/LancRouter';
import { AppDataSource } from './data-source';
import { Movimentacoes } from './model/Movimentacoes';
import { Lancamentos } from './model/Lancamentos';

AppDataSource.initialize().then(async => {
  const app = express();
  app.use(express.json());

  // Initialize dependencies
  const moviRepository = AppDataSource.getRepository(Movimentacoes);
  const moviService = new MoviService(moviRepository);
  const moviController = new MoviController(moviService);
  
  const lancRepository = AppDataSource.getRepository(Lancamentos);
  const lancService = new LancService(lancRepository);
  const lancController = new LancController(lancService);

  // Routes
  app.use('/api/movimentacoes', moviRotas(moviController));
  app.use('/api/lancamentos', lancRotas(lancController));

  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
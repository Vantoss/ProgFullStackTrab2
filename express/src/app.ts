import express from 'express';
import { UserRepository } from './repository/UserRepository';
import { UserService } from './service/UserService';
import { UserController } from './controller/UserController';
import { userRotas } from './router/UserRouter';
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
import { User } from './model/User';

AppDataSource.initialize().then(async => {
  const app = express();
  const cors = require('cors');
  app.use(express.json());

  // Initialize dependencies
  const userRepository = AppDataSource.getRepository(User);
  const userService = new UserService(userRepository);
  const userController = new UserController(userService);

  const moviRepository = AppDataSource.getRepository(Movimentacoes);
  const moviService = new MoviService(moviRepository);
  const moviController = new MoviController(moviService);
  
  const lancRepository = AppDataSource.getRepository(Lancamentos);
  const lancService = new LancService(lancRepository);
  const lancController = new LancController(lancService);

  // Routes
  app.use('/api/movimentacoes', cors(), moviRotas(moviController));
  app.use('/api/lancamentos', cors(), lancRotas(lancController));
  app.use('/api/users', cors(), userRotas(userController));

  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
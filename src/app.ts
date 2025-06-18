import express from 'express';
import { DespesaRepository } from './repository/DespesaRepository';
import { DespesaService } from './service/DespesaService';
import { DespesaController } from './controller/DespesaController';
import { despesaRotas } from './router/DespesaRouter';
import { ContaRepository } from './repository/ContaRepository';
import { ContaService } from './service/ContaService';
import { ContaController } from './controller/ContaController';
import { contaRotas } from './router/ContaRouter';
import { AppDataSource } from './data-source';
import { Despesa } from './model/Despesa';
import { Conta } from './model/Conta';

AppDataSource.initialize().then(async => {
  const app = express();
  app.use(express.json());

  // Initialize dependencies
  const despesaRepository = AppDataSource.getRepository(Despesa);
  const despesaService = new DespesaService(despesaRepository);
  const despesaController = new DespesaController(despesaService);
  
  const contaRepository = AppDataSource.getRepository(Conta);
  const contaService = new ContaService(contaRepository);
  const contaController = new ContaController(contaService);

  // Routes
  app.use('/api/despesas', despesaRotas(despesaController));
  app.use('/api/contas', contaRotas(contaController));

  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
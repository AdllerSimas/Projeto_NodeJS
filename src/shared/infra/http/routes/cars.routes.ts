import { Router } from "express";

import { CreateCarController } from "../../../../modules/cars/useCases/createCar/CreateCarController";

const carsRoutes = Router();

const createCarController = new CreateCarController();

// rotas da aplicação
carsRoutes.post("/", createCarController.handle);

export { carsRoutes };

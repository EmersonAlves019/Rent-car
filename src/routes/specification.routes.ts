import { Router } from "express";

import createSpecificationController from "../modules/cars/useCases/createSpecifitaion";

const specificationRoutes = Router();

specificationRoutes.post("/", (req, res) => {
  return createSpecificationController.handle(req, res);
});

export default specificationRoutes;

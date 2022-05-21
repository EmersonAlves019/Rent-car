import { Router } from "express";

import CreateCategoryController from "../modules/cars/useCases/createCategory";
import listCategoriesController from "../modules/cars/useCases/listCategories";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (req, res) => {
  return CreateCategoryController.handle(req, res);
});

categoriesRoutes.get("/", (req, res) => {
  return listCategoriesController.handle(req, res);
});

export default categoriesRoutes;

import { Router } from "express";

import { Category } from "../model/Category";

const categoriesRoutes = Router();

const categories: Category[] = [];

categoriesRoutes.post("/categories", (req, res) => {
  const { name, description } = req.body;

  const category = new Category();
  console.log(category);

  Object.assign(category, {
    name,
    description,
    created_at: new Date(),
  });

  categories.push(category);

  return res.status(201).json(categories);
});

export { categoriesRoutes };
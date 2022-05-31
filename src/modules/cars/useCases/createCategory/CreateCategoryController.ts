import { Request, Response } from "express";
import { container } from "tsyringe";

import CreateCategoryUseCase from "./CreateCategoryUseCase";

export default class CreateCategoryController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, description } = req.body;

    const createCategoryUseCase = container.resolve(CreateCategoryUseCase);

    try {
      const categoryCreated = await createCategoryUseCase.execute({
        name,
        description,
      });
      return res.status(201).json(categoryCreated);
    } catch (error) {
      return res.status(406).json({ error: error.message });
    }
  }
}

import { Request, Response } from "express";
import { container } from "tsyringe";

import CreateSpecificationUseCase from "./CreateSpecificationUseCase";

export default class CreateSpecificationController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, description } = req.body;
    const createSpecificationUseCase = container.resolve(
      CreateSpecificationUseCase
    );

    try {
      const specificationCrated = await createSpecificationUseCase.execute({
        name,
        description,
      });
      return res.status(201).json(specificationCrated);
    } catch (err) {
      return res.status(400).json(err);
    }
  }
}

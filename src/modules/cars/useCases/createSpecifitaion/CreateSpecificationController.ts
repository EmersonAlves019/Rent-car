import { Request, Response } from "express";

import createSpecificationUseCase from "./CreateSpecificationUseCase";

export default class CreateSpecificationController {
  constructor(private createSpecificationUseCase: createSpecificationUseCase) {}

  handle(req: Request, res: Response): Response {
    const { name, description } = req.body;

    this.createSpecificationUseCase.execute({ name, description });

    return res.status(201).send();
  }
}

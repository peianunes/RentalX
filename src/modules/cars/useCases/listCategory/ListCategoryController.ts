import { Request, Response } from "express";

import { ListCategoriesUseCase } from "./ListCategoryUseCase";

class ListCategoriesController {
  constructor(private listCategoryUseCase: ListCategoriesUseCase) {}

  handle(request: Request, response: Response): Response {
    const allCategories = this.listCategoryUseCase.execute();
    return response.json(allCategories);
  }
}

export { ListCategoriesController };

import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

class ListCategoriesUseCase {
  constructor(private iCategoriesRepository: ICategoriesRepository) {}
  execute(): Category[] {
    const categories = this.iCategoriesRepository.list();
    return categories;
  }
}
export { ListCategoriesUseCase };

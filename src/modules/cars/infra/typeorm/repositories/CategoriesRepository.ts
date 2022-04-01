import { Repository, getRepository } from "typeorm";

import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "@modules/cars/repositories/ICategoriesRepository";

import { Category } from "../entities/Category";

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  async create({ description, name }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({ name, description });
    // INSERT
    await this.repository.save(category);
  }
  async list(): Promise<Category[]> {
    // SELECT * FROM CATEGORIES
    const categories = await this.repository.find();
    return categories;
  }
  async findByName(name: string): Promise<Category> {
    // SELECT * FROM categories WHERE name = "name" limit 1
    const category = await this.repository.findOne({ name });

    return category;
  }
}
export { CategoriesRepository };

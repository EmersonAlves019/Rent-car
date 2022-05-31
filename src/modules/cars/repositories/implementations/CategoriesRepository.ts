import Category from "../../models/cars/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
  async create({ name, description }: ICreateCategoryDTO): Promise<Category> {
    const category = Category.build({
      name,
      description,
    });

    return category.save();
  }

  async list(): Promise<Category[]> {
    return Category.findAll();
  }

  async findByName(name: string) {
    return Category.findOne({
      where: {
        name,
      },
    });
  }
}

export { CategoriesRepository };

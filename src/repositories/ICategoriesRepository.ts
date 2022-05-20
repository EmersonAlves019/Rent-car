import { Category } from "../model/Category";

export interface ICreateCategoryDTO {
  name: string;
  description: string;
}

export interface ICategoriesRepository {
  create({ name, description }: ICreateCategoryDTO): void;
  list(name: string): Category[];
  findByName(name: string): Category;
}

import { Category } from "../../entities/categories.entities";
import AppDataSource from "../../data-source";
import { ICategoryRequest } from "../../interfaces/categories";

const createCategoryService = async ({
  name,
}: ICategoryRequest): Promise<Category> => {
  const categoryRepositori = AppDataSource.getRepository(Category);

  const category = categoryRepositori.create({
    name: name,
  });

  await categoryRepositori.save(category);

  return category;
};

export default createCategoryService;

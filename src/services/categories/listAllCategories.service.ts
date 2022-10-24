import AppDataSource from "../../data-source";
import { Category } from "../../entities/categories.entities";

const listAllCategory = async (): Promise<Category[]> => {
  const categoryRepository = AppDataSource.getRepository(Category);

  const findCategory = await categoryRepository.find();

  return findCategory;
};

export default listAllCategory;

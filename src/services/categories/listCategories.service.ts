import { Category } from "../../entities/categories.entities";
import AppDataSource from "../../data-source";
import { Property } from "../../entities/properties.entities";

const listCategoryService = async (id: string): Promise<any> => {
  const categoryRepositori = AppDataSource.getRepository(Category);
  const propertiesRepositori = AppDataSource.getRepository(Property);

  const category = await categoryRepositori.findOneBy({
    id,
  });

  if (!category) {
    throw new Error("Category not found");
  }
  const properties = await propertiesRepositori.find({
    where: {
      categoryId: category,
    },
    relations: {
      categoryId: true,
    },
  });

  if (properties.length === 0) {
    throw new Error("Propeties not found");
  }
  return properties;
};

export default listCategoryService;

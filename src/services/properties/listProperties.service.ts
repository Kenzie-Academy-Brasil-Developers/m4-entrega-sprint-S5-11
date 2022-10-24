import AppDataSource from "../../data-source";
import { Property } from "../../entities/properties.entities";
import { Category } from "../../entities/categories.entities";

const listPropertyService = async (): Promise<Property[]> => {
  const propertyRepository = AppDataSource.getRepository(Property);
  // const categoryRepository = AppDataSource.getRepository(Category)

  const properties = await propertyRepository.find();

  return properties;
};

export default listPropertyService;

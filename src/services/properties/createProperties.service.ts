import AppDataSource from "../../data-source";
import { Property } from "../../entities/properties.entities";
import { Address } from "../../entities/adress.entities";
import { IPropertyRequest } from "../../interfaces/properties";

const createPropertyService = async (propert: any): Promise<any> => {
  const repositoryProperty = AppDataSource.getRepository(Property);
  const addressRepository = AppDataSource.getRepository(Address);

  const adressCreate = addressRepository.create({
    district: propert.address.district,
    zipCode: propert.address.zipCode,
    number: propert.address.number,
    city: propert.address.city,
    state: propert.address.state,
  });

  await addressRepository.save(adressCreate);

  const property = repositoryProperty.create({
    value: propert.value,
    size: propert.size,
    addressId: adressCreate.id as any,
    categoryId: propert.categoryId,
  });

  console.log(property);

  await repositoryProperty.save(property);

  const propertList = await repositoryProperty.find({
    where: {
      id: property.id,
    },
  });
  console.log(propertList);

  return property;
};

export default createPropertyService;

import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entities";

const deleteUserService = async (
  id: string
): Promise<boolean | Array<String | Number>> => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({
    id,
  });

  if (!findUser) {
    throw new Error("User not found");
  }

  await userRepository.update(id, {
    isActive: false,
  });

  return findUser.isActive;
};

export default deleteUserService;

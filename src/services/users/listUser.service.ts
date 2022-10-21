import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entities";

const listUserService = async (): Promise<User[]> => {
  const listUser = AppDataSource.getRepository(User);

  const users = listUser.find();

  return users;
};

export default listUserService;

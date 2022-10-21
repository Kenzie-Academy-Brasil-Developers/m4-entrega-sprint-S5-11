import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entities";
import jwt from "jsonwebtoken";
import { IUserLogin } from "../../interfaces/users";
import { compare } from "bcrypt";
import "dotenv/config";

const loginSessionService = async ({ email, password }: IUserLogin) => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({
    email,
  });

  if (!findUser) {
    throw new Error("Invalid Email or Password");
  }

  const matchPassword = await compare(password, findUser.password);

  if (!matchPassword) {
    throw new Error("Invalid Email or Password");
  }

  if (!findUser?.isActive) {
    throw new Error("User is not Active");
  }

  const token = jwt.sign(
    {
      isAdm: findUser.isAdm,
      isActive: findUser.isActive,
    },
    process.env.SECRET_KEY as string,
    {
      expiresIn: "24h",
      subject: findUser.id,
    }
  );

  return token;
};

export default loginSessionService;

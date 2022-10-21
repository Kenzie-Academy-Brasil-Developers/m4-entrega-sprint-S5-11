import createUserService from "../../services/users/createUser.service";
import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import { IUserRequest } from "../../interfaces/users";

const createUserController = async (req: Request, res: Response) => {
  try {
    const user: IUserRequest = req.body;

    const createUser = await createUserService(user);

    return res.status(201).json(instanceToPlain(createUser));
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

export default createUserController;

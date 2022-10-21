import { instanceToPlain } from "class-transformer";
import { Request, response, Response } from "express";
import listUserService from "../../services/users/listUser.service";
const listUserController = async (req: Request, res: Response) => {
  if (!req.user.isAdm) {
    return res.status(403).json({
      message: "You not adm",
    });
  }

  const users = await listUserService();
  return res.status(200).json(instanceToPlain(users));
};

export default listUserController;

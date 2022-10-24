import updateUserService from "../../services/users/updateUser.service";
import { Request, Response } from "express";

const updateUserController = async (req: Request, res: Response) => {
  try {
    const updateRequest = req.body;
    const id = req.params.id;

    const updateUser = await updateUserService(updateRequest, id);

    return res.json(updateUser);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(404).json({
        message: error.message,
      });
    }
  }
};

export default updateUserController;

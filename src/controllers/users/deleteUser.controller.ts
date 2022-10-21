import deleteUserService from "../../services/users/deleteUser.service";
import { Request, Response } from "express";

const deleteUserController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const deleteUser = await deleteUserService(id);
    if (deleteUser === false) {
      return res.status(400).json({
        message: "User is not Active",
      });
    }
    return res.status(204).json({
      message: "User deleted",
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(404).json({
        message: error.message,
      });
    }
  }
};

export default deleteUserController;

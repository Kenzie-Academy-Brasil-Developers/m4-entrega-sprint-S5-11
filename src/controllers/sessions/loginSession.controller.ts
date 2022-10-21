import { Request, Response } from "express";
import loginSessionService from "../../services/sessions/loginSession.service";

const loginSessionController = async (req: Request, res: Response) => {
  try {
    const user = req.body;

    const loginSession = await loginSessionService(user);

    return res.json({ token: loginSession });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(403).json({
        message: error.message,
      });
    }
  }
};

export default loginSessionController;

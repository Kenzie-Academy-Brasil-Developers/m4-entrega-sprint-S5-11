import { Request, Response } from "express";
import listPropertyService from "../../services/properties/listProperties.service";

const listPropertiesController = async (req: Request, res: Response) => {
  try {
    const listProperties = await listPropertyService();
    return res.status(200).json(listProperties);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

export default listPropertiesController;

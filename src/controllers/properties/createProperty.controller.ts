import { Request, Response } from "express";
import createPropertyService from "../../services/properties/createProperties.service";

const createPropertyController = async (req: Request, res: Response) => {
  try {
    const property = req.body;
    let createProperty = await createPropertyService(property);
    createProperty.categoryId = req.body.categoryId;
    return res.status(201).json(createProperty);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(404).json({
        message: error.message,
      });
    }
  }
};

export default createPropertyController;

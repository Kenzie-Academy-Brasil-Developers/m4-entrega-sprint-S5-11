import { Request, Response } from "express";
import createCategoryService from "../../services/categories/createCategories.service";

const createCategoryController = async (req: Request, res: Response) => {
  try {
    const category = req.body;
    const createCategory = await createCategoryService(category);

    return res.status(201).json(createCategory);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

export default createCategoryController;

import { Request, Response } from "express";
import createCategoryService from "../../services/categories/createCategories.service";

const createCategoryController = (req: Request, res: Response) => {
  try {
    const category = req.body;
    const createCategory = createCategoryService(category);

    return res.status(200).json(createCategory);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

export default createCategoryController;

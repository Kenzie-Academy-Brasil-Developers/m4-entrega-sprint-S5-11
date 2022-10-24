import { Request, Response } from "express";
import listAllCategory from "../../services/categories/listAllCategories.service";

const listAllCategoryController = async (req: Request, res: Response) => {
  try {
    const list = await listAllCategory();
    return res.status(200).json(list);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

export default listAllCategoryController;

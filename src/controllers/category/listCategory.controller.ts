import listCategoryService from "../../services/categories/listCategories.service";
import { Request, Response } from "express";

const listCategoryController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const listCategories = await listCategoryService(id);

    return res.status(200).json(listCategories);
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({
        message: error.message,
      });
    }
  }
};

export default listCategoryController;

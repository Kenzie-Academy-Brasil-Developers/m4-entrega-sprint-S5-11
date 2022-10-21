import { Request, Response, NextFunction } from "express";

const ensureUpdateMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const updateRequest = req.body;

  const authorization = (property: string) => {
    return updateRequest.hasOwnProperty(property);
  };

  const isAdm = req.user.isAdm;
  const owner = req.params.id === req.user.id;

  if (!isAdm && !owner) {
    return res.status(401).json({
      message: "Unathorized",
    });
  }

  if (
    authorization("isAdm") ||
    authorization("isActive") ||
    authorization("id")
  ) {
    return res.status(401).json({
      message: "Unathorized",
    });
  }
  next();
};

export default ensureUpdateMiddleware;

import { Response, Request, NextFunction } from "express";

const ensureIsActiveMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const isActive = req.user.isActive;
  if (isActive === false) {
    return res.status(400).json({
      message: "User is not Active",
    });
  }

  return next();
};

export default ensureIsActiveMiddleware;

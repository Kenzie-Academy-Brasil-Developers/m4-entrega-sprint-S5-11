import { Response, Request, NextFunction } from "express";

const ensureAdmMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const isAdm = req.user.isAdm;
  if (!isAdm) {
    return res.status(403).json({
      message: "Adm permisson needed",
    });
  }

  return next();
};

export default ensureAdmMiddleware;

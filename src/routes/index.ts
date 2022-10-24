import { Router } from "express";
import createUserController from "../controllers/users/createUser.controller";
import deleteUserController from "../controllers/users/deleteUser.controller";
import listUserController from "../controllers/users/listUser.controller";
import loginSessionController from "../controllers/sessions/loginSession.controller";
import updateUserController from "../controllers/users/updateUser.controller";
import ensureAdmMiddleware from "../middlewares/ensureAdm.middleware";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureUpdateMiddleware from "../middlewares/updateVerificationReq";
import createCategoryController from "../controllers/category/createCategory.controller";
import listCategoryController from "../controllers/category/listCategory.controller";
import createPropertyController from "../controllers/properties/createProperty.controller";
import listPropertiesController from "../controllers/properties/listProperty.controller";
import createScheduleController from "../controllers/schedulles/createSchedulle.controller";
import listScheduleControler from "../controllers/schedulles/listSchedule.controller";
import listAllCategoryController from "../controllers/category/listAllCategory.controller";

export const UserRoutes = Router();
export const UserSession = Router();
export const CategoryRoutes = Router();
export const PropertyRoutes = Router();
export const SchedulesRoutes = Router();

UserRoutes.post("", createUserController);
UserRoutes.get(
  "",
  ensureAuthMiddleware,
  ensureAdmMiddleware,
  listUserController
);
UserRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureUpdateMiddleware,
  updateUserController
);
UserRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureAdmMiddleware,
  deleteUserController
);

UserSession.post("", loginSessionController);

CategoryRoutes.post("", ensureAuthMiddleware, createCategoryController);
CategoryRoutes.get("/:id/properties", listCategoryController);
CategoryRoutes.get("", listAllCategoryController);

PropertyRoutes.post(
  "",
  ensureAuthMiddleware,
  ensureAdmMiddleware,
  createPropertyController
);
PropertyRoutes.get("", listPropertiesController);

SchedulesRoutes.post(
  "",
  ensureAuthMiddleware,
  ensureAuthMiddleware,
  createScheduleController
);
SchedulesRoutes.get(
  "/properties/:id",
  ensureAuthMiddleware,
  ensureAdmMiddleware,
  listScheduleControler
);

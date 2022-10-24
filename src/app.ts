import "reflect-metadata";
import express from "express";
import {
  CategoryRoutes,
  UserRoutes,
  UserSession,
  PropertyRoutes,
  SchedulesRoutes,
} from "./routes";

const app = express();
app.use(express.json());
app.use("/users", UserRoutes);
app.use("/login", UserSession);
app.use("/categories", CategoryRoutes);
app.use("/properties", PropertyRoutes);
app.use("/schedules", SchedulesRoutes);

export default app;

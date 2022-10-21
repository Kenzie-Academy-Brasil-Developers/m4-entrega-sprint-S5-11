import "reflect-metadata";
import express from "express";
import { CategoryRoutes, UserRoutes, UserSession } from "./routes";

const app = express();
app.use(express.json());
app.use("/users", UserRoutes);
app.use("/login", UserSession);
app.use("/categories", CategoryRoutes);

export default app;

import { Router } from "express";
import authRoutes from "./auth";

const routers = Router();

const allRoutes = [authRoutes];

routers.use("/api", ...allRoutes);

export { routers };

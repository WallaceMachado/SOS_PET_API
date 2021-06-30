import { Router } from "express";
import { animalsRoutes } from "./animals.routes";
import { authenticateRoutes } from "./authenticate.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use("/animals", animalsRoutes);

router.use(authenticateRoutes);


export { router };
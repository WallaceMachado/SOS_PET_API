import { Router } from "express";
import { AuthenticateUserController } from "../../../../controllers/accounts/AuthenticateUserController";

const authenticateRoutes = Router();


const authenticateUserController = new AuthenticateUserController();

authenticateRoutes.post("/sessions", authenticateUserController.handle);


export { authenticateRoutes }
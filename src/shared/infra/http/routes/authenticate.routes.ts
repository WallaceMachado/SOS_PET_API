import { Router } from "express";
import { AuthenticateUserController } from "../../../../controllers/accounts/AuthenticateUserController";
import emailAndPasswordValidator from "../validators/emailAndPasswordValidator";

const authenticateRoutes = Router();


const authenticateUserController = new AuthenticateUserController();

authenticateRoutes.post("/sessions", emailAndPasswordValidator, authenticateUserController.handle);


export { authenticateRoutes }
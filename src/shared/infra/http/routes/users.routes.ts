import { Router } from "express";
import { UsersController } from "../../../../controllers/accounts/UsersController";

const usersRoutes = Router();


const usersController = new UsersController();

usersRoutes.post("/", usersController.handle);


export { usersRoutes }
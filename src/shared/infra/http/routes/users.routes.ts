import { Router } from "express";
import { UsersController } from "../../../../controllers/accounts/UsersController";
import { ensureAdmin } from "../meddlewares/ensureAdmin";
import { ensureAuthenticated } from "../meddlewares/ensureAuthenticated";

const usersRoutes = Router();


const usersController = new UsersController();

usersRoutes.post("/", usersController.createUser);
usersRoutes.get("/", ensureAuthenticated, ensureAdmin, usersController.getAllUsers);


export { usersRoutes }
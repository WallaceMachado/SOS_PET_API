import { Router } from "express";
import multer from "multer";
import uploadConfig from "../../../../config/upload";
import { UsersController } from "../../../../controllers/accounts/UsersController";
import { ensureAdmin } from "../meddlewares/ensureAdmin";
import { ensureAuthenticated } from "../meddlewares/ensureAuthenticated";

const usersRoutes = Router();
const uploadAvatar = multer(uploadConfig.upload("tmp/avatar"));

const usersController = new UsersController();

usersRoutes.post("/", usersController.createUser);
usersRoutes.get("/", ensureAuthenticated, ensureAdmin, usersController.getAllUsers);
usersRoutes.patch("/avatar", ensureAuthenticated, uploadAvatar.single("avatar"), usersController.updateUserAvatar);

export { usersRoutes }
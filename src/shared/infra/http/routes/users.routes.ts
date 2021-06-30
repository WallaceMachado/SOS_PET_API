import { Router } from "express";
import multer from "multer";
import uploadConfig from "../../../../config/upload";
import { ProfileUserUserController } from "../../../../controllers/accounts/ProfileUserController";
import { UsersController } from "../../../../controllers/accounts/UsersController";
import userValidator from "../validators/userValidator";
import { ensureAdmin } from "../meddlewares/ensureAdmin";
import { ensureAuthenticated } from "../meddlewares/ensureAuthenticated";

const usersRoutes = Router();
const uploadAvatar = multer(uploadConfig);

const usersController = new UsersController();
const profileUserController = new ProfileUserUserController();

usersRoutes.post("/",userValidator, usersController.createUser);
usersRoutes.get("/", ensureAuthenticated, ensureAdmin, usersController.getAllUsers);
usersRoutes.patch("/avatar", ensureAuthenticated, uploadAvatar.single("avatar"), usersController.updateUserAvatar);
usersRoutes.get("/profile", ensureAuthenticated, profileUserController.getUserProfile);

export { usersRoutes }
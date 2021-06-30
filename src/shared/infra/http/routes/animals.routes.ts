import { Router } from "express";
import { AnimalController } from "../../../../controllers/animals/AnimalController";
import { ensureAuthenticated } from "../meddlewares/ensureAuthenticated";



const animalsRoutes = Router();


const animalController = new AnimalController();


animalsRoutes.post("/", ensureAuthenticated, animalController.createAnimal);

export { animalsRoutes }
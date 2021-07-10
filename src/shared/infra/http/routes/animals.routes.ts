import { Router } from "express";
import { AnimalController } from "../../../../controllers/animals/AnimalController";
import { ensureAuthenticated } from "../meddlewares/ensureAuthenticated";



const animalsRoutes = Router();


const animalController = new AnimalController();


animalsRoutes.post("/", ensureAuthenticated, animalController.createAnimal);
animalsRoutes.get("/", ensureAuthenticated, animalController.getAllAnimals);
animalsRoutes.get("/:id", ensureAuthenticated, animalController.getById);
animalsRoutes.delete("/:id", ensureAuthenticated, animalController.deleteAnimal);
export { animalsRoutes }
import { Request, Response } from "express";
import { container } from "tsyringe";
import { AnimalsServices } from "../../services/animals/AnimalsServices";




class AnimalController {

  async createAnimal(request: Request, response: Response): Promise<Response> {

    const {
      type_animal,
      name,
      animal_gender,
      breed,
      description,
      state,
      city,
      age } = request.body;

    const { id } = request.user;

    const protector_id = id;

    const animalsServices = container.resolve(AnimalsServices);

    await animalsServices.createAnimal({
      protector_id,
      type_animal,
      name,
      animal_gender,
      breed,
      description,
      state,
      city,
      age
    });

    return response.status(201).send({ message: "animal created!" });
  }

  async getAllAnimals(request: Request, response: Response): Promise<Response> {

    const{page=0, limit=0} = request.query

    const animalsServices = container.resolve(AnimalsServices);

    const animals = await animalsServices.getAllAnimals( page as string, limit as string);

    return response.json(animals);

  }

  async getById(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    

    const animalsServices = container.resolve(AnimalsServices);

    const animal = await animalsServices.getById(id);

    return response.json(animal);
  }

  async deleteAnimal(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const animalsServices = container.resolve(AnimalsServices);

    await animalsServices.deleteAnimal(id);

    return response.send({ message: 'Animal Deletado!' })
  }

  async updateAnimal(request: Request, response: Response): Promise<Response> {
    const {
      protector_id,
      type_animal,
      name,
      animal_gender,
      breed,
      description,
      state,
      city,
      age,
      adopter_id,
      avatar } = request.body;

    const { id } = request.params;

    const animalsServices = container.resolve(AnimalsServices);

    const animal = await animalsServices.updateAnimal({
      id,
      protector_id,
      type_animal,
      name,
      animal_gender,
      breed,
      description,
      state,
      city,
      age,
      adopter_id,
      avatar
    });

    return response.json(animal);
  }

}

export { AnimalController }
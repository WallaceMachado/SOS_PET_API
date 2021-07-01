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

}

export { AnimalController }
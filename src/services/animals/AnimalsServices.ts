import { inject, injectable } from "tsyringe";

import { ICreateAnimalsDTO } from "../../repositories/animals/dtos/ICreateAnimalsDTO";
import { IAnimalsRepository } from "../../repositories/animals/IAnimalsRepository";


@injectable()
class AnimalsServices {

  constructor(
    @inject("AnimalsRepository")
    private animalsRepository: IAnimalsRepository,

  ) { }


  async createAnimal({
    protector_id,
    type_animal,
    name,
    animal_gender,
    breed,
    description,
    state,
    city,
    age }: ICreateAnimalsDTO): Promise<void> {


    await this.animalsRepository.create({
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
  }

  async getAllAnimals(): Promise<ICreateAnimalsDTO[]> {


   const animals = await this.animalsRepository.getAllAnimals();

   return animals;
  }

}

export { AnimalsServices }
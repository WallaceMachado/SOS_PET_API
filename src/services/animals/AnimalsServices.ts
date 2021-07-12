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

  async getAllAnimals(page: string,limit: string): Promise<ICreateAnimalsDTO[]> {

    let pageInt = parseInt(page);
    let limitInt = parseInt(limit);
    let animals: ICreateAnimalsDTO[];
    
    if (pageInt){

     animals = await this.animalsRepository.getAnimalsPage(pageInt, limitInt);
      
    } else {
      animals = await this.animalsRepository.getAllAnimals();
    }

   return animals;
  }

  async getById(id: string): Promise<ICreateAnimalsDTO>{
    const animal = this.animalsRepository.getById(id);

    return animal;
  }

  async deleteAnimal(id: string): Promise<void>{
    await this.animalsRepository.deleteAnimal(id);
    
  }

  async updateAnimal({id,
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
    avatar}: ICreateAnimalsDTO): Promise<ICreateAnimalsDTO>{
       await this.animalsRepository.create({
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

      const animal = await this.animalsRepository.getById(id);

      return animal;
    }

}



export { AnimalsServices }
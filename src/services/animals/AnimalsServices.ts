import { inject, injectable } from "tsyringe";
import { User } from "../../models/accounts/infra/typeorm/entities/User";
import { Animal } from "../../models/animals/infra/typeORM/entities/Animal";
import { IUsersRepository } from "../../repositories/accounts/IUsersRepository";

import { ICreateAnimalsDTO } from "../../repositories/animals/dtos/ICreateAnimalsDTO";
import { IAnimalsRepository } from "../../repositories/animals/IAnimalsRepository";


@injectable()
class AnimalsServices {

  constructor(
    @inject("AnimalsRepository")
    private animalsRepository: IAnimalsRepository,

    @inject("UsersRepository")
    private usersRepository: IUsersRepository

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

  async getAllAnimals(page: string, limit: string): Promise<Animal[]> {

    let pageInt = parseInt(page);
    let limitInt = parseInt(limit);
    let animals: Animal[];

    if (pageInt) {

      animals = await this.animalsRepository.getAnimalsPage(pageInt, limitInt);

    } else {
      animals = await this.animalsRepository.getAllAnimals();
    }

    for(let animal of animals){
      const protector = await this.usersRepository.findById(animal.protector_id);

    animal.protector = {
      name: protector.name,
      email: protector.email,
      username: protector.username
    } as User;

    if (animal.adopter_id) {
      const adopter = await this.usersRepository.findById(animal.adopter_id);
      console.log(adopter);

      animal.adopter = {
        name: adopter.name,
        email: adopter.email,
        username: adopter.username
      } as User;
    }
  }


    return animals;
  }

  async getById(id: string): Promise<Animal> {
    const animal = await this.animalsRepository.getById(id);
    const protector = await this.usersRepository.findById(animal.protector_id);

    animal.protector = {
      name: protector.name,
      email: protector.email,
      username: protector.username
    } as User;

    if (animal.adopter_id) {
      const adopter = await this.usersRepository.findById(animal.adopter_id);
      console.log(adopter);

      animal.adopter = {
        name: adopter.name,
        email: adopter.email,
        username: adopter.username
      } as User;
    }


    return animal;
  }

  async deleteAnimal(id: string): Promise<void> {
    await this.animalsRepository.deleteAnimal(id);

  }

  async updateAnimal({ id,
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
    avatar }: ICreateAnimalsDTO): Promise<Animal> {
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
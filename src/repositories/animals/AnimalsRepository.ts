import { getRepository, Repository } from "typeorm";
import { Animal } from "../../models/animals/infra/typeORM/entities/Animal";
import { ICreateAnimalsDTO } from "./dtos/ICreateAnimalsDTO";
import { IAnimalsRepository } from "./IAnimalsRepository";



class AnimalsRepository implements IAnimalsRepository {

  private repository: Repository<Animal>;

  constructor() {
    this.repository = getRepository(Animal);
  }

  async create({
    id,
    protector_id,
    adopter_id,
    type_animal,
    name,
    animal_gender,
    breed,
    description,
    state,
    city,
    age,
  }: ICreateAnimalsDTO): Promise<void> {

    const animal = this.repository.create({
      id,
      protector_id,
      adopter_id,
      type_animal,
      name,
      animal_gender,
      breed,
      description,
      state,
      city,
      age,
    });

    await this.repository.save(animal);

  }
}

export { AnimalsRepository }


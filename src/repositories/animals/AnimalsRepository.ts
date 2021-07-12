import { getRepository, Repository } from "typeorm";
import { Animal } from "../../models/animals/infra/typeORM/entities/Animal";
import { ICreateAnimalsDTO } from "./dtos/ICreateAnimalsDTO";
import { IAnimalsRepository } from "./IAnimalsRepository";



class AnimalsRepository implements IAnimalsRepository {

  private repository: Repository<Animal>;

  constructor() {
    this.repository = getRepository(Animal);
  }
  async getById(id: string): Promise<ICreateAnimalsDTO> {
    return await this.repository.findOne(id);
  }
 async deleteAnimal(id: string): Promise<void> {
    await this.repository.delete(id);
  }
  async getAllAnimals(): Promise<ICreateAnimalsDTO[]> {
   // return await this.repository.query(`SELECT * FROM animals ORDER BY name ASC`);
   return await this.repository.find();
  }
  async getAnimalsPage(pageInt=1, limit=5): Promise<ICreateAnimalsDTO[]> {
    const take =  limit
    const skip = (pageInt -1 ) * limit 
    return await this.repository.find({order:{name: 'ASC'} ,skip,take});
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


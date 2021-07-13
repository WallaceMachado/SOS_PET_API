import internal from "stream";
import { Animal } from "../../models/animals/infra/typeORM/entities/Animal";
import { ICreateAnimalsDTO } from "./dtos/ICreateAnimalsDTO";



interface IAnimalsRepository {
  create(date: ICreateAnimalsDTO): Promise<void>;
  getAllAnimals(): Promise<Animal[]>;
  deleteAnimal(id: string): Promise<void>;
  getById(id: string): Promise<Animal>;
  getAnimalsPage(page: number, limit: number ): Promise<Animal[]>;

}

export { IAnimalsRepository }
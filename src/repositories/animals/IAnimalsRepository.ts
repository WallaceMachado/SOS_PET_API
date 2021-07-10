import { ICreateAnimalsDTO } from "./dtos/ICreateAnimalsDTO";



interface IAnimalsRepository {
  create(date: ICreateAnimalsDTO): Promise<void>;
  getAllAnimals(): Promise<ICreateAnimalsDTO[]>;
  deleteAnimal(id: string): Promise<void>;
  getById(id: string): Promise<ICreateAnimalsDTO>

}

export { IAnimalsRepository }
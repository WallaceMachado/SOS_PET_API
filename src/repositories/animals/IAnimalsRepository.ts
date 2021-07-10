import { ICreateAnimalsDTO } from "./dtos/ICreateAnimalsDTO";



interface IAnimalsRepository {
  create(date: ICreateAnimalsDTO): Promise<void>;
  getAllAnimals(): Promise<ICreateAnimalsDTO[]>;

}

export { IAnimalsRepository }
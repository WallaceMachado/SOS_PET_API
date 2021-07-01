import { ICreateAnimalsDTO } from "./dtos/ICreateAnimalsDTO";



interface IAnimalsRepository {
  create(date: ICreateAnimalsDTO): Promise<void>;

}

export { IAnimalsRepository }
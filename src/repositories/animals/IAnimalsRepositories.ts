import { ICreateAnimalsDTO } from "./dtos/ICreateAnimalsDTO";



interface IAnimalsRepositories {
  create(date: ICreateAnimalsDTO): Promise<void>;
 
}

export {IAnimalsRepositories}
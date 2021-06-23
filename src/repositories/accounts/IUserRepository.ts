import { ICreateUserDTO } from "./dtos/ICreateUserDTO";


interface IUsersRepository {
  create(date: ICreateUserDTO): Promise<void>;
  
}

export { IUsersRepository }
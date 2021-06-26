import { User } from "../../models/accounts/infra/typeorm/entities/User";
import { ICreateUserDTO } from "./dtos/ICreateUserDTO";


interface IUsersRepository {
  create(date: ICreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User>;
  findByUsername(username: string): Promise<User>;
  findById(id: string): Promise<User>;
  getAllUsers(): Promise<User[]>;
}

export { IUsersRepository }
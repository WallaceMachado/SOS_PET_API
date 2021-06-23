
import { getRepository, Repository } from "typeorm";
import { User } from "../../modules/accounts/infra/typeorm/entities/User";
import { ICreateUserDTO } from "./dtos/ICreateUserDTO";
import { IUsersRepository } from "./IUserRepository";



class UsersRepository implements IUsersRepository {

  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    name,
    email,
    password,
    type_user,
    avatar,
    id,
  }: ICreateUserDTO): Promise<void> {

    const user = this.repository.create({
      name,
      password,
      email,
      type_user,
      avatar,
      id,
    });

    await this.repository.save(user);

  }
}

export { UsersRepository }
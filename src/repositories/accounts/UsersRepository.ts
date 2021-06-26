
import { getRepository, Repository } from "typeorm";
import { User } from "../../models/accounts/infra/typeorm/entities/User";
import { ICreateUserDTO } from "./dtos/ICreateUserDTO";
import { IUsersRepository } from "./IUsersRepository";



class UsersRepository implements IUsersRepository {

  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    name,
    username,
    email,
    password,
    type_user,
    avatar,
    id,
  }: ICreateUserDTO): Promise<void> {

    const user = this.repository.create({
      name,
      username,
      password,
      email,
      type_user,
      avatar,
      id,
    });

    await this.repository.save(user);

  }
  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });
    return user;
  }

  async findByUsername(username: string): Promise<User> {
    const user = await this.repository.findOne({ username });
    return user;
  }
}

export { UsersRepository }
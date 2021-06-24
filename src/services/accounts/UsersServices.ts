import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../repositories/accounts/dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/accounts/IUsersRepository";


@injectable()
class UsersServices {

  constructor(    
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }

  async execute({ name, email, password, type_user, username  }: ICreateUserDTO): Promise<void> {

   
    await this.usersRepository.create({
      name,
      email,
      password,
      type_user,
      username,
    });
  }

}

export { UsersServices}



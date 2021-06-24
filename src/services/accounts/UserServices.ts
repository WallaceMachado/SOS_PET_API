import { ICreateUserDTO } from "../../repositories/accounts/dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/accounts/IUserRepository";


class UserServices {

  constructor(
    
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



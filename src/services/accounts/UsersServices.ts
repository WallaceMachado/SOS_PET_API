import { inject, injectable } from "tsyringe";
import { hash } from "bcryptjs";
import { ICreateUserDTO } from "../../repositories/accounts/dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/accounts/IUsersRepository";
import { AppError } from "../../shared/errors/AppError";


@injectable()
class UsersServices {

  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }

  async execute({ name, email, password, type_user, username }: ICreateUserDTO): Promise<void> {

    const userAlreadyExists = await this.usersRepository.findByEmail(email);
    const usernameAlreadyExists = await this.usersRepository.findByUsername(username);

    if (userAlreadyExists) {
      throw new AppError("Email already exists");
    }

    if (usernameAlreadyExists) {
      throw new AppError("Username already exists");
    }

      const passwordHash = await hash(password, 8);

      await this.usersRepository.create({
        name,
        email,
        password: passwordHash,
        type_user,
        username,
      });
    }

  }

export { UsersServices }



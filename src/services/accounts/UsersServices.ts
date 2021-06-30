import { inject, injectable } from "tsyringe";
import { hash } from "bcryptjs";
import { ICreateUserDTO } from "../../repositories/accounts/dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/accounts/IUsersRepository";
import { AppError } from "../../shared/errors/AppError";
import { User } from "../../models/accounts/infra/typeorm/entities/User";
import { deleteFile } from "../../utils/file";
import { IStorageProvider } from "../../shared/container/providers/storageProvider/IStorageProvider";

interface IRequestAvatar {
  user_id: string;
  avatar_File: string;
}

@injectable()
class UsersServices {

  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,

    @inject("StorageProvider")
    private storageProvider: IStorageProvider,
  ) { }
  

  async createUser({ name, email, password, type_user, username }: ICreateUserDTO): Promise<void> {

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


  async getAllUsers(): Promise<User[]> {


    const allUsers = await this.usersRepository.getAllUsers();

    return allUsers;
  }



  async updateUserAvatar({ user_id, avatar_File }: IRequestAvatar): Promise<void> {
    const user = await this.usersRepository.findById(user_id);

    if (user.avatar) {
      await this.storageProvider.delete(user.avatar,"avatar");
    }

    await this.storageProvider.save(avatar_File, 'avatar');
    user.avatar = avatar_File;

    await this.usersRepository.create(user);
  }
}

export { UsersServices }



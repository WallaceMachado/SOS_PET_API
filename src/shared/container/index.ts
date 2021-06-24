import { container } from "tsyringe";
import { IUsersRepository } from "../../repositories/accounts/IUsersRepository";
import { UsersRepository } from "../../repositories/accounts/UsersRepository";



container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);
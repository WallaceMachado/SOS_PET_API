import { container } from "tsyringe";

import { UsersRepository } from "../../repositories/accounts/UsersRepository";
import { IUsersRepository } from "../../repositories/accounts/IUsersRepository";


container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);
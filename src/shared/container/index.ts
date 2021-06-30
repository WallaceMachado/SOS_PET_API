import { container } from "tsyringe";

import { UsersRepository } from "../../repositories/accounts/UsersRepository";
import { IUsersRepository } from "../../repositories/accounts/IUsersRepository";
import "./providers/storageProvider";
import { IAnimalsRepositories } from "../../repositories/animals/IAnimalsRepositories";
import { AnimalsRepositories } from "../../repositories/animals/AnimalsRepositories";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IAnimalsRepositories>(
  "AnimalsRepositories",
  AnimalsRepositories
);
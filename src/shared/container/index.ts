import { container } from "tsyringe";

import { UsersRepository } from "../../repositories/accounts/UsersRepository";
import { IUsersRepository } from "../../repositories/accounts/IUsersRepository";
import "./providers/storageProvider";
import { IAnimalsRepository } from "../../repositories/animals/IAnimalsRepository";
import { AnimalsRepository } from "../../repositories/animals/AnimalsRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IAnimalsRepository>(
  "AnimalsRepository",
  AnimalsRepository
);
import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/accounts/IUsersRepository";
import { ICreateAnimalsDTO } from "../../repositories/animals/dtos/ICreateAnimalsDTO";
import { IAnimalsRepositories } from "../../repositories/animals/IAnimalsRepositories";
import { AppError } from "../../shared/errors/AppError";


@injectable()
class AnimalsServices {

  constructor(
    @inject("AnimalsRepositories")
    private animalsRepository: IAnimalsRepositories,

   
    
  ) { }
  

  async createUser({  
    protector_id,
    type_animal,
    name,
    animal_gender,
    breed,
    description,
    state,
    city,
    age }: ICreateAnimalsDTO): Promise<void> {

        
    await this.animalsRepository.create({
    protector_id,
    type_animal,
    name,
    animal_gender,
    breed,
    description,
    state,
    city,
    age
    });
  }

}

export { AnimalsServices }
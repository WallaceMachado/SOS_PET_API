import { inject, injectable } from "tsyringe"
import { IUserResponseDTO } from "../../repositories/accounts/dtos/IUserResponseDTO"
import { IUsersRepository } from "../../repositories/accounts/IUsersRepository"
import { UserMap } from "../../repositories/accounts/mapper/UserMap"


@injectable()
class ProfileUserServices {

  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }

  async getUserProfile(id: string): Promise<IUserResponseDTO> {
    const user = await this.usersRepository.findById(id)

    return UserMap.toDTO(user)
  }

}

export { ProfileUserServices }
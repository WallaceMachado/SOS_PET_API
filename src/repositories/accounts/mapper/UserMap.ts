import { classToClass } from "class-transformer"
import { User } from "../../../models/accounts/infra/typeorm/entities/User"
import { IUserResponseDTO } from "../dtos/IUserResponseDTO"

class UserMap {
  static toDTO({ email, name, username, id, avatar, type_user, avatar_url }: User): IUserResponseDTO {
    const user = classToClass({
      email, name,username, id, avatar, type_user, avatar_url
    })

    return user
  }
}
export { UserMap }
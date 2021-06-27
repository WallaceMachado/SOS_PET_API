import { Request, Response } from "express"
import { container } from "tsyringe"
import { ProfileUserServices } from "../../services/accounts/ProfileUserServices"


class ProfileUserUserController {
  async getUserProfile(request: Request, response: Response): Promise<Response> {
    const { id } = request.user
    const profileUserUseCase = container.resolve(ProfileUserServices)

    const user = await profileUserUseCase.getUserProfile(id)

    return response.json(user)
   }
}

export { ProfileUserUserController }
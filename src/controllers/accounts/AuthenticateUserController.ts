import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthenticateUserServices } from "../../services/accounts/AuthenticateUserServices";


class AuthenticateUserController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { password, email } = request.body;

    const authenticateUserUseCase = container.resolve(AuthenticateUserServices);

    const returnService = await authenticateUserUseCase.execute({
      password,
      email
    });

    return response.json(returnService);

  }

}

export { AuthenticateUserController }
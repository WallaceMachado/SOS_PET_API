import { Request, Response } from "express";
import { container } from "tsyringe";
import { UsersServices } from "../../services/accounts/UsersServices";


class UsersController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password, type_user, username } = request.body;

    const usersServices = container.resolve(UsersServices);

    await usersServices.execute({
      name,
      email,
      password,
      type_user,
      username
    });

    return response.status(201).send({ message: "user created!" });
  }
}

export { UsersController }
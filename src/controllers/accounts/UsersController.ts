import { Request, Response } from "express";
import { container } from "tsyringe";
import { UsersServices } from "../../services/accounts/UsersServices";


class UsersController {

  async createUser(request: Request, response: Response): Promise<Response> {
    const { name, email, password, type_user, username } = request.body;

    const usersServices = container.resolve(UsersServices);

    await usersServices.createUser({
      name,
      email,
      password,
      type_user,
      username
    });

    return response.status(201).send({ message: "user created!" });
  }

  async getAllUsers(request: Request, response: Response): Promise<Response> {

    const usersServices = container.resolve(UsersServices);

    const allUsers = await usersServices.getAllUsers();

    return response.json(allUsers);
  }

  async updateUserAvatar(request: Request, response: Response): Promise<Response> {
    
    const { id } = request.user;


    const avatar_File = request.file.filename;

    const userServices = container.resolve(UsersServices);

    await userServices.updateUserAvatar({ user_id: id, avatar_File });

    return response.status(204).send({ message: "Success" });
  }
}

export { UsersController }
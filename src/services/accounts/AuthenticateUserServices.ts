import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/accounts/IUsersRepository";


interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  },
  token: string;
}

@injectable()
class AuthenticateUserServices {

  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }

  async execute({ email, password }: IRequest): Promise<IResponse> {
    //Verificar se usuário existe

    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new Error("Email or password incorrect!");
    }



    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Email or password incorrect!");
    }


    const token = sign({}, "ffe0670eced344f3a1b75b459c9d57dc", {
      subject: user.id,
      expiresIn: "1d"
    });

    const tokenReturn: IResponse = {
      token,
      user: {
        name: user.name,
        email: user.email,
      }
    };

    return tokenReturn;

  }
}

export { AuthenticateUserServices }
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { UsersRepository } from "../../../../repositories/accounts/UsersRepository";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction) {

  
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error("Token missing");
  }


  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(token, "ffe0670eced344f3a1b75b459c9d57dc") as IPayload;

    const usersRepository = new UsersRepository();

    const user = usersRepository.findById(user_id);

    if (!user) {
      throw new Error("User does not exists");
    }

    request.user = {
      id: user_id,
    }

    next();

  } catch {
    throw new Error("Invalid token");
  }

}
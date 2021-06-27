  
import { NextFunction, Request, Response } from 'express';
import { UsersRepository } from '../../../../repositories/accounts/UsersRepository';
import { AppError } from '../../../errors/AppError';



export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction

) {
  const { id } = request.user;

  const usersRepository = new UsersRepository();

  const user = await usersRepository.findById(id);

  if (!user.isAdmin) {
    throw new AppError('User must be admin to gain access', 401);
  }

  return next();
}
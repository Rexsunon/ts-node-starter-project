import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { HTTP401Error, HTTP403Error } from '../utils/httpErrors';
// import { UserRole } from '../services/user/models/UserRole';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET_KEY as string;

export const authenticate = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  let token: string = '';
  const authHandler = req.headers['authorization'] as string;

  if (authHandler && authHandler.startsWith('Bearer'))
    token = authHandler.split(' ')[1];

  if (!authHandler) {
    throw new HTTP401Error();
  }

  try {
    jwt.verify(token, JWT_SECRET);
    next();
  } catch (error) {
    throw new HTTP401Error();
  }
};

/* export const authorize = (...roles: string[]) => {
  return (req: Request, _res: Response, next: NextFunction) => {
    if (!roles.includes(req.user.roles)) {
      throw new HTTP403Error();
    }

    next();
  };
}; */

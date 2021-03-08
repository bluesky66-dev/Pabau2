import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { JwtPayloadDto } from '../app/authentication/dto'

declare global {
  namespace Express {
    interface Request {
      authenticatedUser?: JwtPayloadDto;
    }
  }
}

const authenticatedUser = (req: Request, res: Response, next: NextFunction) => {
  if (!req.session?.jwt){
    return next;
  }
  try{
    const payload = jwt.verify(ctx.req.session.jwt, 'madskills') as JwtPayloadDto;
    ctx.req.authenticatedUser = payload
  } catch(error) {
    console.log(error)
  }
  next();
};
export default authenticatedUser;

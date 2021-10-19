import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { AppError } from "../../../errors/AppError";
import { UsersRepository } from "../../../../modules/accounts/infra/typeorm/repositories/UsersRepository";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;
  // Se o token for válido e o usuário existir, segue-se o processo
  if (!authHeader) {
    throw new AppError("Token missing!", 401);
  }
  // Bearer h23fdsf8a9fsaf
  const [, token] = authHeader.split(" ");

  try {
    // recebendo o id do usuário
    const { sub: user_id } = verify(
      token,
      "3a7f471a5523588b2f2009abd0f16e2b"
    ) as IPayload;

    const usersRepository = new UsersRepository();

    const user = usersRepository.findById(user_id);

    if (!user) {
      throw new AppError("User does not exists!", 401);
    }

    request.user = {
      id: user_id,
    };

    next();
  } catch {
    throw new AppError("Invalid token!", 401);
  }
}

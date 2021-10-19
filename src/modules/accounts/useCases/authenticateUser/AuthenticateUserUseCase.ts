import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    // Se o Usuário existir e se o password dar match, será gerado um token
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError("Email or password incorrect!");
    } else {
      const passwordMatch = await compare(password, user.password);

      if (!passwordMatch) {
        throw new AppError("Email or password incorrect!");
      }

      const token = sign({}, "3a7f471a5523588b2f2009abd0f16e2b", {
        subject: user.id,
        expiresIn: "1d",
      });

      const tokenReturn: IResponse = {
        token,
        user: {
          name: user.name,
          email: user.email,
        },
      };

      return tokenReturn;
    }
  }
}

export { AuthenticateUserUseCase };

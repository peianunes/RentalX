import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../erros/AppError";
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
    // Usuario existe?
    const user = await this.usersRepository.findByEmail({ email } as {
      email: string;
    });

    if (!user) {
      throw new AppError("User or password incorrect");
    }
    // Senha esta correta?
    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
      throw new AppError("User or password incorrect");
    }
    // Gerar token
    const token = sign({}, "peianunes0123", {
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
export { AuthenticateUserUseCase };

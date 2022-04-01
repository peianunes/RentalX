import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { UsersRepository } from "../../../../modules/account/infra/typeorm/repositories/UsersRepository";
import { AppError } from "../../../errors/AppError";

interface IPayload {
  sub: string;
}
export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  // Pegando o token no request
  const authHeader = request.headers.authorization;
  // Verificar se o token veio ou esta vazio que ai ja dou next
  if (!authHeader) {
    throw new AppError("Missing Token", 401);
  }
  // //Transformo as informacoes recebidas em posicoes no array para poder verificar se o token e verdadeiro.
  // [0] BEARER
  // [1] 123KOFASAE-ASEKOSAEASO
  const [, token] = authHeader.split(" ");
  // Pegamos o token vamos verificar se bate com a palavra chave e a funcao ja devolve as propriedades do token
  try {
    const { sub: user_id } = verify(token, "peianunes0123") as IPayload;
    // verificar se o id extraido encontrado bate com algum do banco de dados (verify me devolve o subject)
    const usersRepository = new UsersRepository();

    const user = usersRepository.findById(user_id);
    if (!user) {
      throw new AppError("User not found", 401);
    }
    request.user = {
      id: user_id, // passo so o id informacao nao sensivel.
    };
    next();
  } catch {
    throw new AppError("Invalid Token", 401);
  }
}

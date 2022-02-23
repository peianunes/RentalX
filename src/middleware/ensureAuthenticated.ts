import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { AppError } from "../erros/AppError";
import { UsersRepository } from "../modules/account/repositories/implementations/UsersRepository";

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

  // Pegamos o token agora vamos realizar a verificacao e atribuicao a uma variavel para poder trabalhalo

  try {
    const { sub: user_id } = verify(token, "peianunes0123") as IPayload;

    // verificar se o id extraido encontrado bate com algum do banco de dados
    const usersRepository = new UsersRepository();

    const user = usersRepository.findById(user_id);
    if (!user) {
      throw new AppError("User not found", 401);
    }
    request.user = {
      id: user_id,
    };
    next();
  } catch {
    throw new AppError("Invalid Token", 401);
  }
}

import { ICreateUserDTO } from "@modules/account/dtos/ICreateUserDTO";
import { UsersRepositoryInMemory } from "@modules/account/repositories/in-memory/UsersRepositoryInMemory";

import { AppError } from "../../../../shared/errors/AppError";
import { CreateUserUseCase } from "../CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

let authenticateUserUseCase: AuthenticateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe("Authenticate User", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    authenticateUserUseCase = new AuthenticateUserUseCase(
      usersRepositoryInMemory
    );
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  });
  it("Should be able to authenticate an user", async () => {
    const user: ICreateUserDTO = {
      drive_license: "010201",
      email: "user@example.com",
      password: "password",
      name: "user",
    };
    await createUserUseCase.execute(user);

    const result = await authenticateUserUseCase.execute(user);

    expect(result).toHaveProperty("token");
  });
  it("Should not be able to authenticate a nonexistent user", () => {
    expect(async () => {
      await authenticateUserUseCase.execute({
        email: "teste@example.com",
        password: "password",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
  it("Should not be able to authenticate an user when password dosent match", () => {
    expect(async () => {
      const user: ICreateUserDTO = {
        drive_license: "010201",
        email: "user@example.com",
        password: "password",
        name: "user",
      };
      await createUserUseCase.execute(user);
      await authenticateUserUseCase.execute({
        email: "user@example.com",
        password: "123",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});

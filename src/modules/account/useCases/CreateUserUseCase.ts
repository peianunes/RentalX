import { inject, injectable } from "tsyringe";

import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { IUsersRepository } from "../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    name,
    username,
    email,
    password,
    drive_license,
  }: ICreateUserDTO): Promise<void> {
    // const user = await this.usersRepository.findByUsername(username);
    //  if (user) {
    //     throw new Error("Username already exist");
    //  }
    await this.usersRepository.create({
      name,
      username,
      email,
      password,
      drive_license,
    });
  }
}
export { CreateUserUseCase };

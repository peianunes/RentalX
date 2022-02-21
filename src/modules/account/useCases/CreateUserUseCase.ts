import { hash } from "bcryptjs";
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
    email,
    password,
    drive_license,
  }: ICreateUserDTO): Promise<void> {
    const passHash = await hash(password, 8);

    const emailExisit = this.usersRepository.findByEmail(email);
    if (emailExisit) {
      throw new Error("Email already exisist");
    }
    await this.usersRepository.create({
      name,
      email,
      password: passHash,
      drive_license,
    });
  }
}
export { CreateUserUseCase };

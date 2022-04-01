import { ICreateUserDTO } from "@modules/account/dtos/ICreateUserDTO";
import { Users } from "@modules/account/infra/typeorm/entities/Users";

import { IUsersRepository } from "../IUsersRepository";

class UsersRepositoryInMemory implements IUsersRepository {
  users: Users[] = [];
  async create({
    drive_license,
    email,
    name,
    password,
  }: ICreateUserDTO): Promise<void> {
    const user = new Users();
    Object.assign(user, {
      drive_license,
      email,
      name,
      password,
    });
    this.users.push(user);
  }
  async findByEmail(email: string): Promise<Users> {
    return this.users.find((user) => user.email === email);
  }
  async findById(id: string): Promise<Users> {
    return this.users.find((user) => user.id === id);
  }
}

export { UsersRepositoryInMemory };

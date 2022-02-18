import { Repository, getRepository } from "typeorm";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { Users } from "../../entities/Users";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private repository: Repository<Users>;
  constructor() {
    this.repository = getRepository(Users);
  }

  async create({
    name,
    username,
    email,
    password,
    drive_license,
  }: ICreateUserDTO): Promise<void> {
    const user = await this.repository.create({
      name,
      username,
      email,
      password,
      drive_license,
    });
    await this.repository.save(user);
  }
  // async findByUsername({ username }: ICreateUserDTO): Promise<Users> {
  //  const user = await this.repository.find(username);

  //  return user;
}

export { UsersRepository };

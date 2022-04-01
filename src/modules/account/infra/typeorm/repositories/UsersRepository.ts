import { Repository, getRepository } from "typeorm";

import { ICreateUserDTO } from "../../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { Users } from "../entities/Users";

class UsersRepository implements IUsersRepository {
  private repository: Repository<Users>;
  constructor() {
    this.repository = getRepository(Users);
  }

  async create({
    name,
    email,
    password,
    drive_license,
    avatar,
    id,
  }: ICreateUserDTO): Promise<void> {
    const user = await this.repository.create({
      name,
      email,
      password,
      drive_license,
      avatar,
      id,
    });
    await this.repository.save(user);
  }
  async findByEmail(email: string): Promise<Users> {
    const user = await this.repository.findOne(email);
    return user;
  }
  async findById(id: string): Promise<Users> {
    const user = await this.repository.findOne(id);
    return user;
  }
}

export { UsersRepository };

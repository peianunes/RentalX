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
  async findByEmail(email: ICreateUserDTO): Promise<Users> {
    const user = await this.repository.findOne(email);
    return user;
  }
  async findById(id: ICreateUserDTO): Promise<Users> {
    const user = await this.repository.findOne(id);
    return user;
  }
}

export { UsersRepository };

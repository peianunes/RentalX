import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { Users } from "../infra/typeorm/entities/Users";

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
  // findByUsername({ username }: ICreateUserDTO): Promise<Users>;
  findByEmail(email: string): Promise<Users>;
  findById(id: string): Promise<Users>;
}
export { ICreateUserDTO, IUsersRepository };

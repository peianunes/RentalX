import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { Users } from "../entities/Users";

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
  // findByUsername({ username }: ICreateUserDTO): Promise<Users>;
  findByEmail(email: ICreateUserDTO): Promise<Users>;
}
export { ICreateUserDTO, IUsersRepository };

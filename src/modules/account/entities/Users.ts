import { Column, Entity, CreateDateColumn, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity("Users")
class Users {
  @PrimaryColumn()
  id: string;
  @Column()
  name: string;
  @Column()
  password: string;
  @Column()
  email: string;
  @Column()
  drive_license: string;
  @Column()
  isAdmin: boolean;
  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
export { Users };

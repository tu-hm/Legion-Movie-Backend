import { Column, Entity, PrimaryColumn } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity()
export class User {
  @PrimaryColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  userpassword: string;

  @Column()
  createdAt: Date;

  async validatePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.userpassword);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { RegisterUserDto } from './register-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(registerUser: RegisterUserDto): Promise<User> {
    const salt = await bcrypt.genSalt();

    const hashedPassword = await bcrypt.hash(registerUser.password, salt);
    const user = new User();
    user.username = registerUser.username;
    user.userpassword = hashedPassword;

    return this.userRepository.save(user);
  }

  async findOne(id: number): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { id } });
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findByUsername(username: string): Promise<User> {
    return this.userRepository.findOne({ where: { username } });
  }
}

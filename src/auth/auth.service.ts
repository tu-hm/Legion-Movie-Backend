import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor() {}

  async validateUser(username: string, password: string): Promise<any> {
    if (username === 'admin' && password === 'admin') {
      return { username: 'admin' };
    }
    return null;
  }
}

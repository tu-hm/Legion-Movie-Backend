import { Controller, Get, Request } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  logIn(@Request() req: Request) {
    return req;
  }
}

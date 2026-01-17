import { Controller, Put, Req } from '@nestjs/common';
import { Request as ExpressRequest } from 'express';
import { UserType } from 'src/guards/userType';
import { AuthService } from './auth.service';

type RequestWithUser = ExpressRequest & { user: UserType };

@Controller('/api/v1/')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Put('login1')
  async loginFunc(@Req() req: RequestWithUser) {
    const { login, password } = req.body;

    const data = await this.authService.login(login, password);
    return data;
  }
}

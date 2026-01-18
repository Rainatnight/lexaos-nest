import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { FoldersService } from './folders.service';
import { AuthStrictGuard } from 'src/guards/authStrict.guard';
import { Request as ExpressRequest } from 'express';
import { UserType } from 'src/guards/userType';

type RequestWithUser = ExpressRequest & { user: UserType };

@Controller('/api/v1/folders')
export class FoldersController {
  constructor(private readonly foldersService: FoldersService) {}

  @Get('find')
  @UseGuards(AuthStrictGuard)
  async getFolders(@Req() req: RequestWithUser) {
    const { userId } = req.user;
    return this.foldersService.getFolders(userId);
  }
}

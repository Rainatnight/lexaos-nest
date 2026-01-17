import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

import * as dotenv from 'dotenv';
import { AuthModule } from './auth/auth.module';
dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI),
    UsersModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

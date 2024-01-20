import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profil, User } from 'src/typeorm';
import { JWT } from 'src/jwt';

@Module({
  imports: [JWT, TypeOrmModule.forFeature([User, Profil])],
  controllers: [UsersController],
  providers: [UsersService], 
})  
export class UsersModule {}

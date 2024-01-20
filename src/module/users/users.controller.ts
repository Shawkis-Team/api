import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/createUser.dto';
import { ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';
@ApiTags('user')
@Controller('user')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Post('')
  async createUser(@Body() user: CreateUserDto) {
    return await this.userService.createUser(user);
  }
  @Get('')
  async getUser() {
    return await this.userService.getUsers();
  }
  @Post('sigin')
  async login(@Body() body: LoginDto) {
    return await this.userService.login(body);
  }
  @Get(':id')
  async getUserById(@Param('id') id: number) {
    return await this.userService.getUserById(id);
  }
}

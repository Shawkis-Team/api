import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/user';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUser.dto';
import { LoginDto } from './dto/login.dto';
import { ExceptionCode } from 'src/exeption_code';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepos: Repository<User>,
    private jwtService: JwtService,
  ) {}
  getUsers() {
    //   do something
    return this.userRepos.find();
  }
  async login(body: LoginDto) {
    const u = await this.userRepos.findOne({
      where: { mobile: body.mobile, codePin: body.codePin },
    });
    if (!u)
      throw new HttpException({ ...ExceptionCode.INVALID_CREDENTIAL }, 401);
    if (u.profilId.toString() !== process.env.TPE_PROFIL)
      throw new HttpException({ ...ExceptionCode.BAD_PROFILE }, 401);
    return {
      ...u,
      token: await this.jwtService.signAsync(
        { ...u },
        { secret: process.env.API_KEY },
      ),
    };
  }
  createUser(user: CreateUserDto) {
    const newUser = this.userRepos.create(user);
    return this.userRepos.save(newUser);
    //   do something
  }

  async getUserById(id: number) {
    try {
      return await this.userRepos.findOneOrFail({
        where: { id: id },
        relations: { profil: true },
      });
    } catch (error) {
      throw new NotFoundException({ ...error });
    }

    //   do something
  }
}

import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionDto } from 'src/dto/transaction.dto';
import { ApiTags, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { LocalAuthGuard } from 'src/middleware/local_auth.guard';
import { Request } from 'express';
import { CreateUserDto } from '../users/dto/createUser.dto';
@ApiTags('transaction')
@Controller('transaction')
export class TransactionController {
  constructor(private service: TransactionService) {}
  @Get('')
  @UseGuards(LocalAuthGuard)
  @ApiResponse({ type: [TransactionDto], status: 200 })
  getS(@Req() req: Request) {
    return this.service.getS({ by: req['user'] as CreateUserDto });
  }
  @Get(':id')
  @UseGuards(LocalAuthGuard)
  @ApiResponse({ type: TransactionDto, status: 200 })
  get(@Param('id') id: number) {
    return this.service.get(id);
  }
  @Post()
  @UseGuards(LocalAuthGuard)
  @ApiBearerAuth()
  @ApiResponse({ type: TransactionDto, status: 200 })
  create(@Body() item: TransactionDto, @Req() req: Request) {
    return this.service.create(item, req['user']);
  }
  @Put(':id')
  @ApiResponse({
    type: () => {
      return { affected: 0 };
    },
    status: 200,
  })
  update(@Param('id') id: number, @Body() item: TransactionDto) {
    return this.service.update(item);
  }
}

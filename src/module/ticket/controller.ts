import { Controller, Get, Param, Post, Put } from '@nestjs/common';
import { TicketService } from './service';
import { ApiTags } from '@nestjs/swagger';

@Controller('ticket')
@ApiTags('Ticket')
export class TicketController {
  constructor(private service: TicketService) {}
  @Get('')
  getS() {
    return this.service.get();
  }

  @Get('ref/:ref')
  getById(@Param('ref') param: string) {
    return this.service.getByRef(param);
  }
  @Get('validate/:ref')
  validateTicket(@Param('ref') param: string) {
    return this.service.validate(param);
  }
  @Post()
  create() {}
  @Put()
  update() {}
}

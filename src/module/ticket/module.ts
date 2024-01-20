import { Module } from '@nestjs/common';
import { TicketController } from './controller';
import { TicketService } from './service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ticket } from 'src/typeorm';

@Module({
  controllers: [TicketController],
  providers: [TicketService],
  imports: [TypeOrmModule.forFeature([Ticket])],
})
export class TicketModule {}

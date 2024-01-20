import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExceptionCode } from 'src/exeption_code';
import { Ticket } from 'src/typeorm/ticket';
import { Equal, Repository } from 'typeorm';

@Injectable()
export class TicketService {
  constructor(@InjectRepository(Ticket) private repos: Repository<Ticket>) {}
  get() {
    return this.repos.find({ relations: { compte: true } });
  }
  async validate(ref: string) {
    const ticket = await this.getByRef(ref);
    ticket.status = 1;
    await this.repos.save(ticket);
    return ExceptionCode.SUCCEEDED;
  }
  async getByRef(ref: string) {
    const ticket = await this.repos.findOne({
      where: { refTicket: Equal(ref) },
      relations: { compte: true, carte: true },
    });
    if (ticket.status !== 0)
      throw new HttpException(
        { ...ExceptionCode.NOT_FOUND, message: 'ticket invalid' },
        404,
      );
    if (!ticket) throw new HttpException(ExceptionCode.NOT_FOUND, 404);
    return ticket;
  }
}

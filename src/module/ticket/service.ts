import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExceptionCode } from 'src/exeption_code';
import { Ticket } from 'src/typeorm/ticket';
import { Equal, In, IsNull, Not, Repository } from 'typeorm';

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
    return this.repos
      .findOne({
        where: { refTicket: Equal(ref) },
        relations: { compte: true, carte: { compte: true } },
      })
      .then((ticket) => {
        console.log(ticket);
        if (!ticket) throw new HttpException(ExceptionCode.NOT_FOUND, 404);

        if (ticket.status !== 0)
          throw new HttpException(
            { ...ExceptionCode.NOT_FOUND, message: 'ticket invalid' },
            404,
          );
        return { ...ticket, compte: ticket.compte ?? ticket.carte.compte };
      })
      .catch((err) => {
        console.log(err);
        throw new HttpException(
          { ...ExceptionCode.NOT_FOUND, message: 'ticket invalid' },
          404,
        );
      });
  }
}

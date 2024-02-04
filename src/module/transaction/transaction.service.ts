import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TransactionDto } from 'src/dto/transaction.dto';
import { ExceptionCode } from 'src/exeption_code';
import { Carte, Compte, Transaction, User } from 'src/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../users/dto/createUser.dto';
import { UUID } from 'typeorm/driver/mongodb/bson.typings';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(Transaction) private repo: Repository<Transaction>,
    @InjectRepository(Compte) private repoCompte: Repository<Compte>,
    @InjectRepository(Carte) private reposCarte: Repository<Carte>,
  ) {}
  async getS({ by }: { by: CreateUserDto }) {
    console.log('-----------------------get transaction-----------------');
    return await this.repo.find({
      where: { userId: by.id },

      relations: {
        compte: true,
        service: true,
      },
    });
  }
  async get(id: number) {
    return await this.repo.findOne({
      where: { id },
      relations: { compte: true },
    });
  }
  async create(item: TransactionDto, decoded: CreateUserDto) {
    console.log(
      '---------------------create transaction----------------',
      decoded,
      item,
    );
    try {
      const compte = await this.repoCompte.findOne({
        where: { id: item.compteId },
      });
      const carte = await this.reposCarte.findOne({
        where: { idcompte: item.compteId },
      });
      if (carte.solde < item.montant)
        throw new HttpException(ExceptionCode.INSUFFISANT_BALANCE, 404);
      const tnx = await this.repo.save(
        this.repo.create({
          ...item,
          dateTransac: new Date(),
          userId: decoded.id,
          serviceId: item.serviceId,
          agenceId: decoded.agence,
          numTransac: `${Math.floor(Math.random() * 1000000000)}`,
        }),
      );

      if (!tnx) throw new HttpException(ExceptionCode.FAILLURE, 400);
      carte.solde = carte.solde - item.montant;
      await this.reposCarte.save(carte);
      return ExceptionCode.SUCCEEDED;
    } catch (error) {
      throw new HttpException({ ...error }, error.code ?? 500);
    }
  }
  async update(item: TransactionDto) {
    try {
      return await this.repo.update({ id: item.id }, item);
    } catch (error) {
      throw new HttpException({ ...error }, error.code ?? 500);
    }
  }
}

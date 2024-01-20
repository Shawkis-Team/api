import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TransactionDto } from 'src/dto/transaction.dto';
import { ExceptionCode } from 'src/exeption_code';
import { Compte, Transaction } from 'src/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(Transaction) private repo: Repository<Transaction>,
    @InjectRepository(Compte) private repoCompte: Repository<Compte>,
  ) {}
  async getS() {
    console.log('-----------------------get transaction-----------------');
    return await this.repo.find({
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
  async create(item: TransactionDto, decoded: any) {
    try {
      console.log(decoded);
      const compte = await this.repoCompte.findOne({
        where: { id: item.compteId },
      });

      if (compte.solde < item.montant)
        throw new HttpException(ExceptionCode.INSUFFISANT_BALANCE, 404);
      const tnx = await this.repo.save(
        this.repo.create({ ...item, userId: decoded.id, serviceId: 2 }),
      );

      if (!tnx) throw new HttpException(ExceptionCode.FAILLURE, 400);
      compte.solde = compte.solde - item.montant;
      await this.repoCompte.save(compte);
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

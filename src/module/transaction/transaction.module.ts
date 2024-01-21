import { Module } from '@nestjs/common';
import { TransactionController } from './transaction.controller';
import { TransactionService } from './transaction.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carte, Compte, Transaction } from 'src/typeorm';
import { JWT } from 'src/jwt';

@Module({
  imports: [JWT, TypeOrmModule.forFeature([Transaction, Compte, Carte])],
  controllers: [TransactionController],
  providers: [TransactionService],
})
export class TransactionModule {}

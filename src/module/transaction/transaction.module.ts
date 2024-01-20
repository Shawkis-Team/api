import { Module } from '@nestjs/common';
import { TransactionController } from './transaction.controller';
import { TransactionService } from './transaction.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Compte, Transaction } from 'src/typeorm';
import { JWT } from 'src/jwt';

@Module({
  imports: [JWT, TypeOrmModule.forFeature([Transaction, Compte])],
  controllers: [TransactionController],
  providers: [TransactionService],
})
export class TransactionModule {}

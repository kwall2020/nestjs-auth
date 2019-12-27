import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Transaction } from '../entities/transaction.entity';
import { Repository, Between } from 'typeorm';
import { ServiceBase } from './service-base.service';

@Injectable()
export class TransactionService extends ServiceBase<Transaction> {
  constructor(
    @InjectRepository(Transaction)
    private readonly transactionRepository: Repository<Transaction>
  ) {
    super(transactionRepository);
  }

  findByDateRange(
    from: Date,
    to: Date,
    accountId: number
  ): Promise<Transaction[]> {
    return this.transactionRepository.find({
      where: {
        date: Between(from, to),
        accountId
      }
    });
  }
}

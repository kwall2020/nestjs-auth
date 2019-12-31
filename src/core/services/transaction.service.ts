import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, LessThan, Repository } from 'typeorm';

import { Transaction } from '../entities';

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

  findByAsOfDate(to: Date, accountId: number): Promise<Transaction[]> {
    return this.transactionRepository.find({
      where: {
        date: LessThan(to),
        accountId
      }
    });
  }

  findByCleared(cleared: number, accountId: number): Promise<Transaction[]> {
    return this.transactionRepository.find({
      where: {
        cleared,
        accountId
      }
    });
  }

  findByCategory(
    categoryDescription: string,
    from: Date,
    to: Date,
    accountId: number
  ): Promise<Transaction[]> {
    return this.transactionRepository
      .createQueryBuilder('t')
      .leftJoin('t.category', 'c')
      .where('c.description = :categoryDescription', { categoryDescription })
      .andWhere('t.date BETWEEN :from AND :to', { from, to })
      .andWhere('t.accountId = :accountId', { accountId })
      .getMany();
  }
}

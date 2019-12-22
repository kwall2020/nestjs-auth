import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Transaction } from '../entities/transaction.entity';
import { Repository, Between } from 'typeorm';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(Transaction)
    private readonly repository: Repository<Transaction>
  ) {}

  findOne(id: number): Promise<Transaction> {
    return this.repository.findOne(id);
  }

  find(): Promise<Transaction[]> {
    return this.repository.find();
  }

  findByDateRange(
    from: Date,
    to: Date,
    account: number
  ): Promise<Transaction[]> {
    return this.repository.find({
      where: {
        date: Between(from, to),
        account
      }
    });
  }
}

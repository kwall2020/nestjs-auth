import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Transaction } from '../transaction.entity';
import { Repository, Between } from 'typeorm';
import * as moment from 'moment';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(Transaction)
    private readonly repository: Repository<Transaction>
  ) {}

  findAll(): Promise<Transaction[]> {
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

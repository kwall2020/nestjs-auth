import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Balance } from '../entities/balance.entity';
import { Repository, DeleteResult, InsertResult } from 'typeorm';
import { ServiceBase } from './service-base.service';

@Injectable()
export class BalanceService extends ServiceBase<Balance> {
  constructor(
    @InjectRepository(Balance)
    private readonly balanceRepository: Repository<Balance>
  ) {
    super(balanceRepository);
  }

  delete(date: Date): Promise<DeleteResult> {
    return this.balanceRepository.delete({ date });
  }

  insert(date: Date, amount: number): Promise<InsertResult> {
    return this.balanceRepository.insert({ date, amount });
  }
}

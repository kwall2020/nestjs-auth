import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';

import { Balance } from '../entities/balance.entity';

import { ServiceBase } from './service-base.service';

@Injectable()
export class BalanceService extends ServiceBase<Balance> {
  constructor(
    @InjectRepository(Balance)
    protected readonly balanceRepository: Repository<Balance>
  ) {
    super(balanceRepository);
  }

  deleteByDate(date: Date): Promise<DeleteResult> {
    return this.balanceRepository.delete({ date });
  }
}

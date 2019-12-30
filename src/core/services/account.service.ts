import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Account } from '../entities/account.entity';

import { ServiceBase } from './service-base.service';

@Injectable()
export class AccountService extends ServiceBase<Account> {
  constructor(
    @InjectRepository(Account)
    protected readonly accountRepository: Repository<Account>
  ) {
    super(accountRepository);
  }
}

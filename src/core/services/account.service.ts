import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from '../entities/account.entity';
import { Repository } from 'typeorm';
import { ServiceBase } from './service-base.service';

@Injectable()
export class AccountService extends ServiceBase<Account> {
  constructor(
    @InjectRepository(Account)
    private readonly accountRepository: Repository<Account>
  ) {
    super(accountRepository);
  }
}

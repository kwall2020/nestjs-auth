import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from '../entities/account.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account)
    private readonly repository: Repository<Account>
  ) {}

  findOne(id: number): Promise<Account> {
    return this.repository.findOne(id);
  }

  find(): Promise<Account[]> {
    return this.repository.find();
  }
}

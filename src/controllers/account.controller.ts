import { Controller } from '@nestjs/common';

import { Account } from '../core/entities/account.entity';
import { AccountService } from '../core/services/account.service';

import { ControllerBase } from './controller-base.controller';

@Controller('account')
export class AccountController extends ControllerBase<Account> {
  constructor(protected readonly accountService: AccountService) {
    super(accountService);
  }
}

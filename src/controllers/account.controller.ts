import { Controller } from '@nestjs/common';
import { AccountService } from '../core/services/account.service';
import { Account } from '../core/entities/account.entity';
import { ControllerBase } from './controller-base.controller';

@Controller('account')
export class AccountController extends ControllerBase<Account> {
  constructor(private readonly accountService: AccountService) {
    super(accountService);
  }
}

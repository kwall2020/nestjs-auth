import { Controller, Get, UseGuards, Param } from '@nestjs/common';
import { AccountService } from '../core/services/account.service';
import { Account } from '../core/entities/account.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  find(): Promise<Account[]> {
    return this.accountService.find();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Account> {
    return this.accountService.findOne(+id);
  }
}

import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { Transaction } from '../core/entities/transaction.entity';
import { TransactionService } from '../core/services/transaction.service';

import { ControllerBase } from './controller-base.controller';

@Controller('transaction')
export class TransactionController extends ControllerBase<Transaction> {
  constructor(private readonly transactionService: TransactionService) {
    super(transactionService);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findByQuery(@Query() query: any): Promise<Transaction[]> {
    if (query.categoryDescription) {
      return this.transactionService.findByCategory(
        query.categoryDescription,
        query.from,
        query.to,
        query.accountId
      );
    } else if (query.from) {
      return this.transactionService.findByDateRange(
        query.from,
        query.to,
        query.accountId
      );
    } else if (query.asOfDate) {
      return this.transactionService.findByAsOfDate(
        query.asOfDate,
        query.accountId
      );
    } else if (query.cleared) {
      return this.transactionService.findByCleared(
        query.cleared,
        query.accountId
      );
    } else {
      return this.transactionService.find();
    }
  }
}

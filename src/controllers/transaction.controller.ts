import { Controller, Get, UseGuards, Query } from '@nestjs/common';
import { TransactionService } from '../core/services/transaction.service';
import { Transaction } from '../core/entities/transaction.entity';
import { AuthGuard } from '@nestjs/passport';
import { ControllerBase } from './controller-base.controller';

@Controller('transaction')
export class TransactionController extends ControllerBase<Transaction> {
  constructor(private readonly transactionService: TransactionService) {
    super(transactionService);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findByQuery(@Query() query): Promise<Transaction[]> {
    if (query.from) {
      return this.transactionService.findByDateRange(
        query.from,
        query.to,
        query.account
      );
    } else {
      return this.transactionService.find();
    }
  }
}

import { Controller, Get, UseGuards, Query } from '@nestjs/common';
import { TransactionService } from '../services/transaction.service';
import { Transaction } from '../transaction.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  find(@Query() query): Promise<Transaction[]> {
    return this.transactionService.findByDateRange(
      query.from,
      query.to,
      query.account,
    );
  }
}

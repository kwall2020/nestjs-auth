import { Controller, Get, UseGuards, Query } from '@nestjs/common';
import { TransactionService } from '../core/services/transaction.service';
import { Transaction } from '../core/entities/transaction.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findByDateRange(@Query() query): Promise<Transaction[]> {
    return this.transactionService.findByDateRange(
      query.from,
      query.to,
      query.account
    );
  }
}

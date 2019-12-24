import { Controller, Get, UseGuards, Query, Param } from '@nestjs/common';
import { TransactionService } from '../core/services/transaction.service';
import { Transaction } from '../core/entities/transaction.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  find(@Query() query): Promise<Transaction[]> {
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

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Transaction> {
    return this.transactionService.findOne(+id);
  }
}

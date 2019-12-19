import { Controller, Get, UseGuards } from '@nestjs/common';
import { TransactionService } from '../services/transaction.service';
import { Transaction } from '../transaction.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(): Promise<Transaction[]> {
    return this.transactionService.findAll();
  }
}

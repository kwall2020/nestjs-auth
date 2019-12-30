import { Controller, UseGuards, Delete, Query } from '@nestjs/common';
import { BalanceService } from '../core/services/balance.service';
import { Balance } from '../core/entities/balance.entity';
import { ControllerBase } from './controller-base.controller';
import { AuthGuard } from '@nestjs/passport';
import { DeleteResult } from 'typeorm';

@Controller('balance')
export class BalanceController extends ControllerBase<Balance> {
  constructor(private readonly balanceService: BalanceService) {
    super(balanceService);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete()
  delete(@Query() query: any): Promise<DeleteResult> {
    return this.balanceService.deleteByDate(query.date);
  }
}

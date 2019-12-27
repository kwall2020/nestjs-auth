import {
  Controller,
  UseGuards,
  Delete,
  Query,
  Post,
  Body
} from '@nestjs/common';
import { BalanceService } from '../core/services/balance.service';
import { Balance } from '../core/entities/balance.entity';
import { ControllerBase } from './controller-base.controller';
import { AuthGuard } from '@nestjs/passport';
import { DeleteResult, InsertResult } from 'typeorm';

@Controller('balance')
export class BalanceController extends ControllerBase<Balance> {
  constructor(private readonly balanceService: BalanceService) {
    super(balanceService);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete()
  delete(@Query() query: any): Promise<DeleteResult> {
    return this.balanceService.delete(query.date);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  insert(@Body() body: any): Promise<InsertResult> {
    return this.balanceService.insert(body.date, body.amount);
  }
}

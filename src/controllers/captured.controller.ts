import { Controller, UseGuards, Get, Query } from '@nestjs/common';
import { CapturedService } from '../core/services/captured.service';
import { Captured } from '../core/entities/captured.entity';
import { ControllerBase } from './controller-base.controller';
import { AuthGuard } from '@nestjs/passport';

@Controller('captured')
export class CapturedController extends ControllerBase<Captured> {
  constructor(private readonly capturedService: CapturedService) {
    super(capturedService);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findByQuery(@Query() query): Promise<Captured[]> {
    if (query.date) {
      return this.capturedService.findByDate(query.date);
    } else {
      return this.capturedService.find();
    }
  }
}

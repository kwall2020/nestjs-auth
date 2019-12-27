import { Get, UseGuards, Param, Delete } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ServiceBase } from '../core/services/service-base.service';

export class ControllerBase<T> {
  constructor(private readonly service: ServiceBase<T>) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  find(): Promise<T[]> {
    return this.service.find();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  findOne(@Param('id') id: string): Promise<T> {
    return this.service.findOne(+id);
  }
}

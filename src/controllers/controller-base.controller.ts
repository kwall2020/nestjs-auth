import {
  Body,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';

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

  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  patch(@Param('id') id: string, @Body() body: any): Promise<UpdateResult> {
    return this.service.update(+id, body);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  delete(@Param('id') id: string): Promise<DeleteResult> {
    return this.service.delete(+id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  insert(@Body() body: T): Promise<InsertResult> {
    return this.service.insert(body);
  }
}

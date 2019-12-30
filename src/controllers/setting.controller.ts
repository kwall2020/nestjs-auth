import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Query,
  UseGuards
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UpdateResult } from 'typeorm';

import { Setting } from '../core/entities/setting.entity';
import { SettingService } from '../core/services/setting.service';

import { ControllerBase } from './controller-base.controller';

@Controller('setting')
export class SettingController extends ControllerBase<Setting> {
  constructor(private readonly settingService: SettingService) {
    super(settingService);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findByQuery(@Query() query: any): Promise<Setting[]> {
    if (query.name) {
      return this.settingService.findByName(+query.accountId, query.name);
    } else {
      return this.settingService.find();
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':accountId/:name')
  patchByKey(
    @Param('accountId') accountId: string,
    @Param('name') name: string,
    @Body() body: any
  ): Promise<UpdateResult> {
    return this.settingService.updateByKey(+accountId, name, body);
  }
}

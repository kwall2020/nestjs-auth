import { Controller, UseGuards, Get, Query } from '@nestjs/common';
import { SettingService } from '../core/services/setting.service';
import { Setting } from '../core/entities/setting.entity';
import { ControllerBase } from './controller-base.controller';
import { AuthGuard } from '@nestjs/passport';

@Controller('setting')
export class SettingController extends ControllerBase<Setting> {
  constructor(private readonly settingService: SettingService) {
    super(settingService);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findByQuery(@Query() query): Promise<Setting[]> {
    if (query.name) {
      return this.settingService.findByName(+query.account, query.name);
    } else {
      return this.settingService.find();
    }
  }
}

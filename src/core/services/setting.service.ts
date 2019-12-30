import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Setting } from '../entities';

import { ServiceBase } from './service-base.service';

@Injectable()
export class SettingService extends ServiceBase<Setting> {
  constructor(
    @InjectRepository(Setting)
    private readonly settingRepository: Repository<Setting>
  ) {
    super(settingRepository);
  }

  findByName(accountId: number, name: string): Promise<Setting[]> {
    return this.settingRepository.find({
      where: {
        accountId,
        name
      }
    });
  }
}

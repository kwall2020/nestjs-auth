import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Recurrence } from '../entities/recurrence.entity';

import { ServiceBase } from './service-base.service';

@Injectable()
export class RecurrenceService extends ServiceBase<Recurrence> {
  constructor(
    @InjectRepository(Recurrence)
    protected readonly recurrenceRepository: Repository<Recurrence>
  ) {
    super(recurrenceRepository);
  }
}

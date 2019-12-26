import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Recurrence } from '../entities/recurrence.entity';
import { Repository } from 'typeorm';
import { ServiceBase } from './service-base.service';

@Injectable()
export class RecurrenceService extends ServiceBase<Recurrence> {
  constructor(
    @InjectRepository(Recurrence)
    private readonly recurrenceRepository: Repository<Recurrence>
  ) {
    super(recurrenceRepository);
  }
}

import { Controller } from '@nestjs/common';

import { Recurrence } from '../core/entities/recurrence.entity';
import { RecurrenceService } from '../core/services/recurrence.service';

import { ControllerBase } from './controller-base.controller';

@Controller('recurrence')
export class RecurrenceController extends ControllerBase<Recurrence> {
  constructor(protected readonly recurrenceService: RecurrenceService) {
    super(recurrenceService);
  }
}

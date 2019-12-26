import { Controller } from '@nestjs/common';
import { RecurrenceService } from '../core/services/recurrence.service';
import { Recurrence } from '../core/entities/recurrence.entity';
import { ControllerBase } from './controller-base.controller';

@Controller('recurrence')
export class RecurrenceController extends ControllerBase<Recurrence> {
  constructor(private readonly recurrenceService: RecurrenceService) {
    super(recurrenceService);
  }
}

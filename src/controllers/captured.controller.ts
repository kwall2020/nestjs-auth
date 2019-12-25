import { Controller } from '@nestjs/common';
import { CapturedService } from '../core/services/captured.service';
import { Captured } from '../core/entities/captured.entity';
import { ControllerBase } from './controller-base.controller';

@Controller('captured')
export class CapturedController extends ControllerBase<Captured> {
  constructor(private readonly capturedService: CapturedService) {
    super(capturedService);
  }
}

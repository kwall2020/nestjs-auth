import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Captured } from '../entities/captured.entity';
import { Repository } from 'typeorm';
import { ServiceBase } from './service-base.service';

@Injectable()
export class CapturedService extends ServiceBase<Captured> {
  constructor(
    @InjectRepository(Captured)
    private readonly capturedRepository: Repository<Captured>
  ) {
    super(capturedRepository);
  }

  findByDate(date: Date): Promise<Captured[]> {
    return this.capturedRepository.find({
      where: {
        date
      }
    });
  }
}

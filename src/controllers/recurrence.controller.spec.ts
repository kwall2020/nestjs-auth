import { Test, TestingModule } from '@nestjs/testing';
import { RecurrenceController } from './recurrence.controller';

describe('RecurrenceController', () => {
  let controller: RecurrenceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecurrenceController]
    }).compile();

    controller = module.get<RecurrenceController>(RecurrenceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

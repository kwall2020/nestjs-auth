import { Test, TestingModule } from '@nestjs/testing';
import { CapturedController } from './captured.controller';

describe('CapturedController', () => {
  let controller: CapturedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CapturedController]
    }).compile();

    controller = module.get<CapturedController>(CapturedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

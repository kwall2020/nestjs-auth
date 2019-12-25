import { Test, TestingModule } from '@nestjs/testing';
import { CapturedService } from './captured.service';

describe('CapturedService', () => {
  let service: CapturedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CapturedService]
    }).compile();

    service = module.get<CapturedService>(CapturedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

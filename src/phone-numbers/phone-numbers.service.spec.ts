import { Test, TestingModule } from '@nestjs/testing';
import { PhoneNumberValidationService } from './phone-numbers.service';

describe('PhoneNumbersService', () => {
  let service: PhoneNumberValidationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhoneNumberValidationService],
    }).compile();

    service = module.get<PhoneNumberValidationService>(
      PhoneNumberValidationService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

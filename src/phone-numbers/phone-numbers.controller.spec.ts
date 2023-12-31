/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { PhoneNumberController } from './phone-numbers.controller';

describe('PhoneNumbersController', () => {
  let controller: PhoneNumberController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhoneNumberController],
    }).compile();

    controller = module.get<PhoneNumberController>(PhoneNumberController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

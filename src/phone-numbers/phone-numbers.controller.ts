/* eslint-disable prettier/prettier */
// phone-number.controller.ts

import { Controller, Post, Body } from '@nestjs/common';
import { PhoneNumberValidationService } from './phone-numbers.service';

interface PhoneNumberData {
  phoneNumber: string;
  countryCode: string;
}

@Controller('api')
export class PhoneNumberController {
  constructor(
    private readonly phoneNumberService: PhoneNumberValidationService,
  ) {}

  @Post('validate-phone-numbers')
  async validatePhoneNumbers(
    @Body() data: { phoneNumberData: PhoneNumberData[] },
  ): Promise<any[]> {
    const { phoneNumberData } = data;

    const validatedNumbers =
      this.phoneNumberService.validatePhoneNumbers(phoneNumberData);

    // Perform further operations or return validatedNumbers as needed
    return validatedNumbers;
  }
}

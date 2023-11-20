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
  async validateAndSavePhoneNumbers(
    @Body() data: { phoneNumberData: PhoneNumberData[] },
  ): Promise<any[]> {
    try {
      const { phoneNumberData } = data;

      console.log('Received phoneNumberData:', phoneNumberData); // Log received data

      const validatedNumbers =
        this.phoneNumberService.validateAndSavePhoneNumbers(phoneNumberData);

      console.log('Validated numbers:', validatedNumbers); // Log validated numbers

      return validatedNumbers;
    } catch (error) {
      console.error('Error occurred:', error); // Log any errors
      throw new Error('Validation error');
    }
  }
}

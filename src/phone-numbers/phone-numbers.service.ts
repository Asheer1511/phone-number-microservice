// phone-number.service.ts

import { Injectable } from '@nestjs/common';
import { PhoneNumberUtil, PhoneNumberType } from 'google-libphonenumber';

interface PhoneNumberData {
  phoneNumber: string;
  countryCode: string;
}

@Injectable()
export class PhoneNumberValidationService {
  private phoneNumberUtil: PhoneNumberUtil;

  constructor() {
    this.phoneNumberUtil = PhoneNumberUtil.getInstance();
  }

  validatePhoneNumbers(phoneNumberData: PhoneNumberData[]): any[] {
    return phoneNumberData.map(({ phoneNumber, countryCode }) => {
      try {
        const parsedNumber = this.phoneNumberUtil.parse(
          phoneNumber,
          countryCode,
        );
        const isValid = this.phoneNumberUtil.isValidNumber(parsedNumber);
        const phoneNumberType =
          this.phoneNumberUtil.getNumberType(parsedNumber);

        return {
          phoneNumber,
          countryCode,
          isValid,
          phoneNumberType: PhoneNumberType[phoneNumberType], // Convert number type to string
          // Add more relevant information as needed
        };
      } catch (error) {
        return {
          phoneNumber,
          countryCode,
          isValid: false,
          error: 'Invalid phone number',
        };
      }
    });
  }
}
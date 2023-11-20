/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PhoneNumberUtil, PhoneNumberType } from 'google-libphonenumber';
import { PhoneNumbersRepository } from '../repo/phone-numbers.repository';

interface PhoneNumberData {
  phoneNumber: string;
  countryCode: string;
}

@Injectable()
export class PhoneNumberValidationService {
  private phoneNumberUtil: PhoneNumberUtil;

  constructor(private readonly phoneNumbersRepository: PhoneNumbersRepository) {
    this.phoneNumberUtil = PhoneNumberUtil.getInstance();
  }

  validateAndSavePhoneNumbers(
    phoneNumberData: PhoneNumberData[],
  ): Promise<any> {
    const validatedNumbers = this.validatePhoneNumbers(phoneNumberData);

    // Save the validated numbers into the database using the repository
    return this.phoneNumbersRepository.save(validatedNumbers);
  }

  private validatePhoneNumbers(phoneNumberData: PhoneNumberData[]): any[] {
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

/* eslint-disable prettier/prettier */
// phone-number.module.ts

import { Module } from '@nestjs/common';
import { PhoneNumberController } from './phone-numbers.controller';
import { PhoneNumberValidationService } from './phone-numbers.service';

@Module({
  controllers: [PhoneNumberController],
  providers: [PhoneNumberValidationService],
})
export class PhoneNumberModule {}

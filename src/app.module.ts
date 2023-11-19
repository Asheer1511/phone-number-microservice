// phone-numbers.module.ts

import { Module } from '@nestjs/common';
import { PhoneNumberController } from './phone-numbers/phone-numbers.controller';
import { PhoneNumberValidationService } from './phone-numbers/phone-numbers.service';
import { PhoneNumbersRepository } from './repo/phone-numbers.repository';
import { connect, connection } from 'mongoose';
import { PhoneNumberSchema, PhoneNumber } from './repo/phone-number.schema';
//import { PhoneNumberModel } from './repo/phone-number.model';
@Module({
  controllers: [PhoneNumberController],
  providers: [
    PhoneNumberValidationService,
    PhoneNumbersRepository,
    {
      provide: 'PhoneNumberModel',
      useFactory: async () => {
        await connect('mongodb://localhost:27017/phone_numbers_db').catch(
          (error) => {
            console.error('Failed to connect to MongoDB:', error);
            throw new Error('Database connection error');
          },
        );
        return connection.model<PhoneNumber>('PhoneNumber', PhoneNumberSchema);
      },
    },
    // Other providers...
  ],
})
export class AppModule {}

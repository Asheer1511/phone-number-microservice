/* eslint-disable prettier/prettier */
// phone-numbers.repository.ts

import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PhoneNumbersRepository {
  constructor(@InjectModel('PhoneNumber') private readonly phoneNumberModel: Model<any>) {}

  async save(phoneNumbers: any[]): Promise<any[]> {
    const savedNumbers = await this.phoneNumberModel.insertMany(phoneNumbers);
    return savedNumbers;
  }
}

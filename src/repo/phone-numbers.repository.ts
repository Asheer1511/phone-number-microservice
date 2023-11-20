/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PhoneNumbersRepository {
  constructor(
    @InjectModel('PhoneNumber') private readonly phoneNumberModel: Model<any>,
  ) {}

  async save(validatedPhoneNumbers: any[]): Promise<any[]> {
    const savedNumbers = await this.phoneNumberModel.insertMany(
      validatedPhoneNumbers,
    );
    return savedNumbers;
  }
}

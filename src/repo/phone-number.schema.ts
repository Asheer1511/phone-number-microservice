/* eslint-disable prettier/prettier */
// phone-number.schema.ts

import { Schema, Document } from 'mongoose';

export const PhoneNumberSchema = new Schema({
  phoneNumber: String,
  countryCode: String,
  isValid: Boolean,
  phoneNumberType: String,
  // Other relevant fields
});

export interface PhoneNumber extends Document {
  phoneNumber: string;
  countryCode: string;
  isValid: boolean;
  phoneNumberType: string;
  // Other relevant fields
}

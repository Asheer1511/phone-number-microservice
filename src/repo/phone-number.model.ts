/* eslint-disable prettier/prettier */
// phone-number.model.ts

import { model } from 'mongoose';
import { PhoneNumberSchema, PhoneNumber } from './phone-number.schema';

export const PhoneNumberModel = model<PhoneNumber>(
  'PhoneNumber',
  PhoneNumberSchema,
);

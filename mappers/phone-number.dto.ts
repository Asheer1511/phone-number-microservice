import { IsNotEmpty, IsPhoneNumber } from 'class-validator';

export class PhoneNumberDto {
  @IsNotEmpty()
  @IsPhoneNumber(null) // Use appropriate options for phone number validation
  phoneNumber: string;
}

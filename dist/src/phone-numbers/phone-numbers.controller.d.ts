import { PhoneNumberValidationService } from './phone-numbers.service';
interface PhoneNumberData {
    phoneNumber: string;
    countryCode: string;
}
export declare class PhoneNumberController {
    private readonly phoneNumberService;
    constructor(phoneNumberService: PhoneNumberValidationService);
    validateAndSavePhoneNumbers(data: {
        phoneNumberData: PhoneNumberData[];
    }): Promise<any[]>;
}
export {};

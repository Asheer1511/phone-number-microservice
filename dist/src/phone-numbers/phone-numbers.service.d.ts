import { PhoneNumbersRepository } from '../repo/phone-numbers.repository';
interface PhoneNumberData {
    phoneNumber: string;
    countryCode: string;
}
export declare class PhoneNumberValidationService {
    private readonly phoneNumbersRepository;
    private phoneNumberUtil;
    constructor(phoneNumbersRepository: PhoneNumbersRepository);
    validateAndSavePhoneNumbers(phoneNumberData: PhoneNumberData[]): Promise<any>;
    private validatePhoneNumbers;
}
export {};

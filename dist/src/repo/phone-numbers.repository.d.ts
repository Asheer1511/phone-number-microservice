import { Model } from 'mongoose';
export declare class PhoneNumbersRepository {
    private readonly phoneNumberModel;
    constructor(phoneNumberModel: Model<any>);
    save(validatedPhoneNumbers: any[]): Promise<any[]>;
}

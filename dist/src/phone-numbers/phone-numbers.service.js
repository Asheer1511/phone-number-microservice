"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneNumberValidationService = void 0;
const common_1 = require("@nestjs/common");
const google_libphonenumber_1 = require("google-libphonenumber");
const phone_numbers_repository_1 = require("../repo/phone-numbers.repository");
let PhoneNumberValidationService = class PhoneNumberValidationService {
    constructor(phoneNumbersRepository) {
        this.phoneNumbersRepository = phoneNumbersRepository;
        this.phoneNumberUtil = google_libphonenumber_1.PhoneNumberUtil.getInstance();
    }
    validateAndSavePhoneNumbers(phoneNumberData) {
        const validatedNumbers = this.validatePhoneNumbers(phoneNumberData);
        return this.phoneNumbersRepository.save(validatedNumbers);
    }
    validatePhoneNumbers(phoneNumberData) {
        return phoneNumberData.map(({ phoneNumber, countryCode }) => {
            try {
                const parsedNumber = this.phoneNumberUtil.parse(phoneNumber, countryCode);
                const isValid = this.phoneNumberUtil.isValidNumber(parsedNumber);
                const phoneNumberType = this.phoneNumberUtil.getNumberType(parsedNumber);
                return {
                    phoneNumber,
                    countryCode,
                    isValid,
                    phoneNumberType: google_libphonenumber_1.PhoneNumberType[phoneNumberType],
                };
            }
            catch (error) {
                return {
                    phoneNumber,
                    countryCode,
                    isValid: false,
                    error: 'Invalid phone number',
                };
            }
        });
    }
};
exports.PhoneNumberValidationService = PhoneNumberValidationService;
exports.PhoneNumberValidationService = PhoneNumberValidationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [phone_numbers_repository_1.PhoneNumbersRepository])
], PhoneNumberValidationService);
//# sourceMappingURL=phone-numbers.service.js.map
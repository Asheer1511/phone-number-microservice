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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneNumberController = void 0;
const common_1 = require("@nestjs/common");
const phone_numbers_service_1 = require("./phone-numbers.service");
let PhoneNumberController = class PhoneNumberController {
    constructor(phoneNumberService) {
        this.phoneNumberService = phoneNumberService;
    }
    async validateAndSavePhoneNumbers(data) {
        try {
            const { phoneNumberData } = data;
            console.log('Received phoneNumberData:', phoneNumberData);
            const validatedNumbers = this.phoneNumberService.validateAndSavePhoneNumbers(phoneNumberData);
            console.log('Validated numbers:', validatedNumbers);
            return validatedNumbers;
        }
        catch (error) {
            console.error('Error occurred:', error);
            throw new Error('Validation error');
        }
    }
};
exports.PhoneNumberController = PhoneNumberController;
__decorate([
    (0, common_1.Post)('validate-phone-numbers'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PhoneNumberController.prototype, "validateAndSavePhoneNumbers", null);
exports.PhoneNumberController = PhoneNumberController = __decorate([
    (0, common_1.Controller)('api'),
    __metadata("design:paramtypes", [phone_numbers_service_1.PhoneNumberValidationService])
], PhoneNumberController);
//# sourceMappingURL=phone-numbers.controller.js.map
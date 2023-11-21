"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const phone_numbers_controller_1 = require("./phone-numbers/phone-numbers.controller");
const phone_numbers_service_1 = require("./phone-numbers/phone-numbers.service");
const phone_numbers_repository_1 = require("./repo/phone-numbers.repository");
const mongoose_1 = require("mongoose");
const phone_number_schema_1 = require("./repo/phone-number.schema");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        controllers: [phone_numbers_controller_1.PhoneNumberController],
        providers: [
            phone_numbers_service_1.PhoneNumberValidationService,
            phone_numbers_repository_1.PhoneNumbersRepository,
            {
                provide: 'PhoneNumberModel',
                useFactory: async () => {
                    await (0, mongoose_1.connect)('mongodb://localhost:27017/validated_numbers_db').catch((error) => {
                        console.error('Failed to connect to MongoDB:', error);
                        throw new Error('Database connection error');
                    });
                    return mongoose_1.connection.model('PhoneNumber', phone_number_schema_1.PhoneNumberSchema);
                },
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map
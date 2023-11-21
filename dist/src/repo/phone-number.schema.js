"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneNumberSchema = void 0;
const mongoose_1 = require("mongoose");
exports.PhoneNumberSchema = new mongoose_1.Schema({
    phoneNumber: String,
    countryCode: String,
    isValid: Boolean,
    phoneNumberType: String,
});
//# sourceMappingURL=phone-number.schema.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneNumberModel = void 0;
const mongoose_1 = require("mongoose");
const phone_number_schema_1 = require("./phone-number.schema");
exports.PhoneNumberModel = (0, mongoose_1.model)('PhoneNumber', phone_number_schema_1.PhoneNumberSchema);
//# sourceMappingURL=phone-number.model.js.map
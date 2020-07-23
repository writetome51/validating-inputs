"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const input_validator_service_1 = require("./input-validator.service");
const is_empty_not_empty_1 = require("@writetome51/is-empty-not-empty");
class ValidatingInputService {
    constructor() {
        this.error = '';
    }
    isValid() {
        this.error = '';
        input_validator_service_1.InputValidatorService.validate(this.data);
        if (is_empty_not_empty_1.notEmpty(this.data.__error)) {
            this.error = this.data.__error;
            return false;
        }
        return true;
    }
}
exports.ValidatingInputService = ValidatingInputService;

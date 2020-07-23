"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validating_input_service_1 = require("./validating-input.service");
const __get_input_functions_1 = require("./__get-input.functions");
class ValidatingPasswordInputService extends validating_input_service_1.ValidatingInputService {
    constructor() {
        super();
        this.data = __get_input_functions_1.__getDefaultTypeInput('password');
    }
}
exports.ValidatingPasswordInputService = ValidatingPasswordInputService;

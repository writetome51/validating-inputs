"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var get_input_functions_1 = require("./get-input.functions");
// Framework independent
var ValidatingPasswordInputService = /** @class */ (function () {
    function ValidatingPasswordInputService() {
        this.data = get_input_functions_1.getDefaultPasswordInput();
    }
    return ValidatingPasswordInputService;
}());
exports.ValidatingPasswordInputService = ValidatingPasswordInputService;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var get_input_functions_1 = require("./get-input.functions");
// Framework independent
var ValidatingNumberInputService = /** @class */ (function () {
    function ValidatingNumberInputService() {
        this.data = get_input_functions_1.getDefaultNumberInput();
    }
    return ValidatingNumberInputService;
}());
exports.ValidatingNumberInputService = ValidatingNumberInputService;

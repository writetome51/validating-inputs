"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var get_input_functions_1 = require("./get-input.functions");
// Framework independent
var ValidatingTextInputService = /** @class */ (function () {
    function ValidatingTextInputService() {
        this.data = get_input_functions_1.getDefaultTextInput();
    }
    return ValidatingTextInputService;
}());
exports.ValidatingTextInputService = ValidatingTextInputService;

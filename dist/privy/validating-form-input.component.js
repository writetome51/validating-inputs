"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidatingFormInputComponent = /** @class */ (function () {
    function ValidatingFormInputComponent(__validatingInput) {
        this.__validatingInput = __validatingInput;
    }
    Object.defineProperty(ValidatingFormInputComponent.prototype, "input", {
        get: function () {
            return this.__validatingInput.data;
        },
        enumerable: true,
        configurable: true
    });
    return ValidatingFormInputComponent;
}());
exports.ValidatingFormInputComponent = ValidatingFormInputComponent;

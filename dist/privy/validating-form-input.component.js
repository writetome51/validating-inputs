"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ValidatingFormInputComponent {
    constructor(__validatingInput) {
        this.__validatingInput = __validatingInput;
    }
    get input() {
        return this.__validatingInput.data;
    }
}
exports.ValidatingFormInputComponent = ValidatingFormInputComponent;

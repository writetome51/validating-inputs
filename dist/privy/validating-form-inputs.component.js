"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ValidatingFormInputsComponent {
    constructor(__validatingInputs) {
        this.__validatingInputs = __validatingInputs;
    }
    get inputs() {
        return this.__validatingInputs.data;
    }
}
exports.ValidatingFormInputsComponent = ValidatingFormInputsComponent;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function __getDefaultTextInput() {
    return __getDefaultTypeInput('text');
}
exports.__getDefaultTextInput = __getDefaultTextInput;
function __getDefaultPasswordInput() {
    return __getDefaultTypeInput('password');
}
exports.__getDefaultPasswordInput = __getDefaultPasswordInput;
function __getDefaultNumberInput() {
    return __getDefaultTypeInput('number');
}
exports.__getDefaultNumberInput = __getDefaultNumberInput;
function __getDefaultTypeInput(type) {
    var input = __getDefaultInput();
    input.type = type;
    return input;
}
exports.__getDefaultTypeInput = __getDefaultTypeInput;
function __getDefaultInput() {
    return {
        type: undefined,
        id: undefined,
        label: undefined,
        hidePlaceholder: false,
        hideLabel: true,
        required: true,
        objectToBind: undefined,
        propertyToBind: undefined,
        objectToMatch: undefined,
        propertyToMatch: undefined,
        isValid: undefined,
        errorMessage: undefined,
        __error: '',
        prompt: undefined,
        maxLength: undefined,
        minLength: undefined,
        max: undefined,
        min: undefined
    };
}
exports.__getDefaultInput = __getDefaultInput;

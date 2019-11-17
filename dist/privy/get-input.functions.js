"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getDefaultTextInput() {
    return getDefaultTypeInput('text');
}
exports.getDefaultTextInput = getDefaultTextInput;
function getDefaultPasswordInput() {
    return getDefaultTypeInput('password');
}
exports.getDefaultPasswordInput = getDefaultPasswordInput;
function getDefaultNumberInput() {
    return getDefaultTypeInput('number');
}
exports.getDefaultNumberInput = getDefaultNumberInput;
function getDefaultTypeInput(type) {
    var input = getDefaultInput();
    input.type = type;
    return input;
}
exports.getDefaultTypeInput = getDefaultTypeInput;
function getDefaultInput() {
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
exports.getDefaultInput = getDefaultInput;

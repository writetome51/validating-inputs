"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const not_1 = require("@writetome51/not");
const is_array_not_array_1 = require("@writetome51/is-array-not-array");
class InputValidatorService {
    static validate(input) {
        if (is_array_not_array_1.isArray(input.isValid))
            handleArray(input.isValid);
        else
            handleFunction(input.isValid);
        function handleArray(isValidFunctions) {
            if (is_array_not_array_1.notArray(input.errorMessage))
                throw new Error(`The 'isValid' property is an array, which means the 'errorMessage' property 
					must also be an array`);
            // @ts-ignore
            for (let i = 0; i < isValidFunctions.length; ++i) {
                let isValid = isValidFunctions[i];
                if (not_1.not(isValid())) {
                    input.__error = input.errorMessage[i];
                    return;
                }
                else
                    input.__error = ''; // no error.
            }
        }
        function handleFunction(isValid) {
            if (typeof isValid !== 'function') {
                throw new Error(`The 'isValid' property must be either a function or an array of functions`);
            }
            else if (not_1.not(isValid())) {
                // @ts-ignore
                input.__error = input.errorMessage;
            }
            else
                input.__error = ''; // no error.
        }
    }
}
exports.InputValidatorService = InputValidatorService;

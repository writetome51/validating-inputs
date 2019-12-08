"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var not_1 = require("@writetome51/not");
var is_array_not_array_1 = require("@writetome51/is-array-not-array");
var InputValidatorService = /** @class */ (function () {
    function InputValidatorService() {
    }
    InputValidatorService.validate = function (input) {
        if (is_array_not_array_1.isArray(input.isValid))
            handleArray(input.isValid);
        else
            handleFunction(input.isValid);
        function handleArray(isValidFunctions) {
            if (is_array_not_array_1.notArray(input.errorMessage))
                throw new Error("The 'isValid' property is an array, which means the 'errorMessage' property \n\t\t\t\t\tmust also be an array");
            // @ts-ignore
            for (var i = 0; i < isValidFunctions.length; ++i) {
                var isValid = isValidFunctions[i];
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
                throw new Error("The 'isValid' property must be either a function or an array of functions");
            }
            else if (not_1.not(isValid())) {
                // @ts-ignore
                input.__error = input.errorMessage;
            }
            else
                input.__error = ''; // no error.
        }
    };
    return InputValidatorService;
}());
exports.InputValidatorService = InputValidatorService;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const input_validator_service_1 = require("./input-validator.service");
const is_empty_not_empty_1 = require("@writetome51/is-empty-not-empty");
const public_array_container_1 = require("@writetome51/public-array-container");
class ValidatingInputsService extends public_array_container_1.PublicArrayContainer {
    constructor(
    // `inputs` must be in the order you want them to appear in the form
    ...inputs) {
        super();
        this.error = '';
        this.data = inputs.map((input) => input.data);
    }
    areValid() {
        this.error = '';
        for (let i = 0; i < this.data.length; ++i) {
            input_validator_service_1.InputValidatorService.validate(this.data[i]);
            if (is_empty_not_empty_1.notEmpty(this.data[i].__error)) {
                this.error = this.data[i].__error;
                return false;
            }
        }
        return true;
    }
}
exports.ValidatingInputsService = ValidatingInputsService;

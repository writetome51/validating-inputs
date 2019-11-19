"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var input_validator_service_1 = require("./input-validator.service");
var is_empty_not_empty_1 = require("@writetome51/is-empty-not-empty");
var public_array_container_1 = require("@writetome51/public-array-container");
var ValidatingInputsService = /** @class */ (function (_super) {
    __extends(ValidatingInputsService, _super);
    function ValidatingInputsService() {
        // `inputs` must be in the order you want them to appear in the form
        var inputs = [];
        for (
        // `inputs` must be in the order you want them to appear in the form
        var _i = 0; 
        // `inputs` must be in the order you want them to appear in the form
        _i < arguments.length; 
        // `inputs` must be in the order you want them to appear in the form
        _i++) {
            // `inputs` must be in the order you want them to appear in the form
            inputs[_i] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this.error = '';
        _this.data = inputs.map(function (input) { return input.data; });
        return _this;
    }
    ValidatingInputsService.prototype.areValid = function () {
        this.error = '';
        for (var i = 0; i < this.data.length; ++i) {
            input_validator_service_1.InputValidatorService.validate(this.data[i]);
            if (is_empty_not_empty_1.notEmpty(this.data[i].__error)) {
                this.error = this.data[i].__error;
                return false;
            }
        }
        return true;
    };
    return ValidatingInputsService;
}(public_array_container_1.PublicArrayContainer));
exports.ValidatingInputsService = ValidatingInputsService;

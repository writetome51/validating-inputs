"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/***********
In Angular, intended to be used with ValidatingInputsComponent:
To use, create a subclass and attach @Component to it, like so:

 @Component({
    selector: 'example-form-inputs',

    // write this exactly as-is:
    template: `<validating-inputs [inputs]="inputs"></validating-inputs>`
})
export class ExampleFormInputsComponent extends ValidatingFormInputsComponent {...}
 **********/
var ValidatingFormInputsComponent = /** @class */ (function () {
    function ValidatingFormInputsComponent(__validatingInputs) {
        this.__validatingInputs = __validatingInputs;
    }
    Object.defineProperty(ValidatingFormInputsComponent.prototype, "inputs", {
        get: function () {
            return this.__validatingInputs.data;
        },
        enumerable: true,
        configurable: true
    });
    return ValidatingFormInputsComponent;
}());
exports.ValidatingFormInputsComponent = ValidatingFormInputsComponent;

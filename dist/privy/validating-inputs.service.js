import { InputValidatorService } from './input-validator.service.js';
import { notEmpty } from '@writetome51/is-empty-not-empty';
import { PublicArrayContainer } from '@writetome51/public-array-container';
export class ValidatingInputsService extends PublicArrayContainer {
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
            InputValidatorService.validate(this.data[i]);
            if (notEmpty(this.data[i].__error)) {
                this.error = this.data[i].__error;
                return false;
            }
        }
        return true;
    }
}

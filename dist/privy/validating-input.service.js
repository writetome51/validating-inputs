import { InputValidatorService } from './input-validator.service.js';
import { notEmpty } from '@writetome51/is-empty-not-empty';
export class ValidatingInputService {
    constructor() {
        this.error = '';
    }
    isValid() {
        this.error = '';
        InputValidatorService.validate(this.data);
        if (notEmpty(this.data.__error)) {
            this.error = this.data.__error;
            return false;
        }
        return true;
    }
}

import { InputValidatorService } from './input-validator.service.js';
import { notEmpty } from '@writetome51/is-empty-not-empty';
export class ValidatingInputService {
    constructor() {
        this.error = '';
    }
    isValid() {
        this.error = '';
        InputValidatorService.validate(this.data);
        if (notEmpty(this.data.triggeredError)) {
            this.error = this.data.triggeredError;
            return false;
        }
        return true;
    }
}

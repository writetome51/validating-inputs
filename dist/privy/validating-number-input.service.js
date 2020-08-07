import { ValidatingInputService } from './validating-input.service.js';
import { __getDefaultTypeInput } from './__get-input.functions.js';
export class ValidatingNumberInputService extends ValidatingInputService {
    constructor() {
        super();
        this.data = __getDefaultTypeInput('number');
    }
}

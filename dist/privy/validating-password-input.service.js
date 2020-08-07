import { ValidatingInputService } from './validating-input.service.js';
import { __getDefaultTypeInput } from './__get-input.functions.js';
export class ValidatingPasswordInputService extends ValidatingInputService {
    constructor() {
        super();
        this.data = __getDefaultTypeInput('password');
    }
}

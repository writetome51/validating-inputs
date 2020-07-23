import { ValidatingInputService } from './validating-input.service';
import { __getDefaultTypeInput } from './__get-input.functions';


export abstract class ValidatingTextInputService extends ValidatingInputService {

	constructor() {
		super();
		this.data = __getDefaultTypeInput('text');
	}

}

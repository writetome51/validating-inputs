import { ValidatingInputService } from './validating-input.service';
import { __getDefaultTypeInput } from './__get-input.functions';


export abstract class ValidatingNumberInputService extends ValidatingInputService {

	constructor() {
		super();
		this.data = __getDefaultTypeInput('number');
	}

}

import { ValidatingInput } from './validating-input';
import { ValidatingInputService } from './validating-input.service';


export abstract class ValidatingFormInputComponent {

	constructor(private __validatingInput: ValidatingInputService) {
	}


	get input(): ValidatingInput {
		return this.__validatingInput.data;
	}

}

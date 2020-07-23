import { InputValidatorService } from './input-validator.service';
import { notEmpty } from '@writetome51/is-empty-not-empty';
import { ValidatingInput } from './validating-input';


export abstract class ValidatingInputService {

	data: ValidatingInput;
	error = '';


	isValid(): boolean {
		this.error = '';

		InputValidatorService.validate(this.data);

		if (notEmpty(this.data.__error)) {
			this.error = this.data.__error;
			return false;
		}
		return true;
	}

}

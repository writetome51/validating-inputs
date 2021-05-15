import { CanBeValidated } from './can-be-validated';
import { InputValidatorService } from './input-validator.service';
import { notEmpty } from '@writetome51/is-empty-not-empty';
import { ValidatingInput } from './validating-input';


export abstract class ValidatingInputService implements CanBeValidated {

	data: ValidatingInput;
	error = '';


	isValid(): boolean {
		this.error = '';

		InputValidatorService.validate(this.data);

		if (notEmpty(this.data.triggeredError)) {
			this.error = this.data.triggeredError;
			return false;
		}
		return true;
	}


	getValue(): any {
		return this.data.objectToBind[this.data.propertyToBind];
	}

}

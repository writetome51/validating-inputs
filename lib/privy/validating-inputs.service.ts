import { InputValidatorService } from './input-validator.service';
import { notEmpty } from '@writetome51/is-empty-not-empty';
import { PublicArrayContainer } from '@writetome51/public-array-container';
import { ValidatingInput } from './validating-input';
import { ValidatingInputService } from './validating-input.service';
import { CanBeValidated } from './can-be-validated';


export abstract class ValidatingInputsService extends PublicArrayContainer implements CanBeValidated {

	data: ValidatingInput[];
	error = '';


	constructor(
		// `inputs` must be in the order you want them to appear in the form

		...inputs: ValidatingInputService[]
	) {
		super();

		this.data = inputs.map((input) => input.data);
	}


	isValid(): boolean {
		this.error = '';

		for (let i = 0, length = this.data.length; i < length; ++i) {
			InputValidatorService.validate(this.data[i]);

			if (notEmpty(this.data[i].triggeredError)) {
				this.error = this.data[i].triggeredError;
				return false;
			}
		}
		return true;
	}


	getValue(): any[] {
		return this.data.map((input: ValidatingInput) => input.objectToBind[input.propertyToBind]);
	}

}

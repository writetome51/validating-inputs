import {InputValidatorService} from './input-validator.service.js';
import {notEmpty} from '@writetome51/is-empty-not-empty';
import {PublicArrayContainer} from '@writetome51/public-array-container';


export class ValidatingInputsService extends PublicArrayContainer {

	constructor(
		// `inputs` must be in the order you want them to appear in the form
		...inputs
	) {
		super();
		this.error = '';
		this.data = inputs.map((input) => input.data);
	}


	isValid() {
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


	getValue() {
		return this.data.map((input) => input.objectToBind[input.propertyToBind]);
	}

}

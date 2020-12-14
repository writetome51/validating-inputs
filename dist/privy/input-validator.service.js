import {not} from '@writetome51/not';
import {isArray, notArray} from '@writetome51/is-array-not-array';


export class InputValidatorService {
	static validate(input) {
		if (isArray(input.isValid)) handleArray(input.isValid);
		else handleFunction(input.isValid);


		// If one function returns false, the subsequent are not executed.
		function handleArray(isValidFunctions) {
			if (notArray(input.errorMessage)) throw new Error(
				`The 'isValid' property is an array, which means the 'errorMessage' property 
					must also be an array`
			);
			// @ts-ignore
			for (let i = 0, length = isValidFunctions.length; i < length; ++i) {
				let isValid = isValidFunctions[i];
				if (not(isValid())) {
					input.triggeredError = input.errorMessage[i];
					return;
				}
				else input.triggeredError = ''; // no error.
			}
		}


		function handleFunction(isValid) {
			if (typeof isValid !== 'function') {
				throw new Error(
					`The 'isValid' property must be either a function or an array of functions`
				);
			}
			else if (not(isValid())) {
				// @ts-ignore
				input.triggeredError = input.errorMessage;
			}
			else input.triggeredError = ''; // no error.
		}
	}
}

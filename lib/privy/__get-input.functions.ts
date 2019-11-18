import { ValidatingInput } from './validating-input';


export function __getDefaultTextInput(): ValidatingInput {
	return __getDefaultTypeInput('text');
}


export function __getDefaultPasswordInput(): ValidatingInput {
	return __getDefaultTypeInput('password');
}


export function __getDefaultNumberInput(): ValidatingInput {
	return __getDefaultTypeInput('number');
}


export function __getDefaultTypeInput(type: string): ValidatingInput {
	let input = __getDefaultInput();
	input.type = type;
	return input;
}


export function __getDefaultInput(): ValidatingInput {
	return {
		type: undefined,
		id: undefined,
		label: undefined,
		hidePlaceholder: false,
		hideLabel: true,
		required: true,
		objectToBind: undefined,
		propertyToBind: undefined,
		objectToMatch: undefined,
		propertyToMatch: undefined,
		isValid: undefined,
		errorMessage: undefined,
		__error: '',
		prompt: undefined,
		maxLength: undefined,
		minLength: undefined,
		max: undefined,
		min: undefined
	};
}

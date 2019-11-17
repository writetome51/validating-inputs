import { ValidatingInput } from './validating-input';


export function getDefaultTextInput(): ValidatingInput {
	return getDefaultTypeInput('text');
}


export function getDefaultPasswordInput(): ValidatingInput {
	return getDefaultTypeInput('password');
}


export function getDefaultNumberInput(): ValidatingInput {
	return getDefaultTypeInput('number');
}


export function getDefaultTypeInput(type: string): ValidatingInput {
	let input = getDefaultInput();
	input.type = type;
	return input;
}


export function getDefaultInput(): ValidatingInput {
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

export function __getDefaultTypeInput(type) {
	let input = __getDefaultInput();
	input.__type = type;
	return input;
}


export function __getDefaultInput() {
	return {
		__type: undefined,
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
		triggeredError: '',
		prompt: undefined,
		maxLength: undefined,
		minLength: undefined,
		max: undefined,
		min: undefined
	};
}

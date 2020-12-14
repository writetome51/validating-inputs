export class ValidatingFormInputComponent {
	constructor(__validatingInput) {
		this.__validatingInput = __validatingInput;
	}


	get input() {
		return this.__validatingInput.data;
	}
}

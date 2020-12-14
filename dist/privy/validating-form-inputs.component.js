export class ValidatingFormInputsComponent {
	constructor(__validatingInputs) {
		this.__validatingInputs = __validatingInputs;
	}


	get inputs() {
		return this.__validatingInputs.data;
	}
}

export interface CanBeValidated {

	isValid: (() => boolean) | (() => boolean)[];
		// Can be function or array of functions.

}

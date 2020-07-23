// Represents a <form> input that validates itself.


export interface ValidatingInput {

	type: string;
		// Can be 'text', 'password', or 'number'.  Any <input> type is allowed, but so far this is
		// only intended for those three.

	id: string;
		// assigned to <input> id. Same value is used for 'name' attribute and the input's associated
		// <label> 'for' attribute.

	isValid: (() => boolean) | (() => boolean)[];
		// Can be function or array of functions.  If array of functions:
		//   - this.errorMessage must be array of error messages, each one belonging with
		//     function of same index.
		//   - The functions are called in the order they're listed.  If one returns false,
		// 	   the following functions are not executed.

	errorMessage: string | string[]; // message to show if input is invalid

	__error: string;
		// Private.  Empty string.  If input is invalid, this is assigned this.errorMessage

	objectToBind: object;
		// this.objectToBind[this.propertyToBind] is the variable storing the value of this input.

	propertyToBind: string; // property in this.objectToBind

	label: string; // same value is used for 'placeholder' attribute

	hideLabel?: boolean; // Adds 'hidden' attribute to input's associated <label>, default true

	hidePlaceholder?: boolean; // default false

	required?: boolean; // default true

	prompt?: string; // text explaining input or asking user to fill it in

	objectToMatch?: object;
		// this.objectToMatch[this.propertyToMatch] is the variable storing the value of another
		// input -- an input whose value is supposed to match with this one.
		// Example: if one <input> is for 'password' and another <input> is for 'confirm-password',
		// you need to make sure they match.  The ValidatingInput representing 'confirm-password'
		// would need its objectToMatch[propertyToMatch] to be the object[property] storing the
		// value of 'password'.  this.objectToMatch[this.propertyToMatch] can then be checked in
		// this.isValid if it matches this.objectToBind[this.propertyToBind].

	propertyToMatch?: string; // property in this.objectToMatch

	max?: number; // max value allowed if this.type is 'number'

	min?: number; // min value allowed if this.type is 'number'

	maxLength?: number; // if this.type is 'text' or 'password'

	minLength?: number; // if this.type is 'text' or 'password'
}

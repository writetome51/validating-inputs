# interface CanBeValidated

	isValid: (() => boolean) | (() => boolean)[];
		// Can be function or array of functions.


# interface ValidatingInput extends CanBeValidated

    __type: 'text' | 'password' | 'number'; // Private

    id: string;
        // assigned to <input> id. Same value is used for 'name' attribute and  
        // the input's associated <label> 'for' attribute.

	errorMessage: string | string[];
        // message to show if input is invalid.
        // If this.isValid is array of functions, this must be array of strings, 
        // each one belonging with function of same index.

	triggeredError: string;
        // If input is invalid, this is assigned the resulting message in 
        // this.errorMessage.

	objectToBind: object;
        // this.objectToBind[this.propertyToBind] stores entered value of this input

	propertyToBind: string; // property in this.objectToBind

	label: string; // same value is used for 'placeholder' attribute

	hideLabel?: boolean; 
        // Adds 'hidden' attribute to input's associated <label>, default true

	hidePlaceholder?: boolean; // default false

	required?: boolean; // default true

	prompt?: string; // text explaining input or asking user to fill it in

	objectToMatch?: object;
        // this.objectToMatch[this.propertyToMatch] stores the entered value of another
        // input -- an input whose value is supposed to match with this one.
        // Example: if one <input> is for 'password' and another <input> is for 
        // 'confirm-password', they must match.  The ValidatingInput representing 
        // 'confirm-password' would need its objectToMatch[propertyToMatch] to be the 
        // object[property] storing the value of 'password'. 
        // this.objectToMatch[this.propertyToMatch] can then be checked in this.isValid 
        // if it matches this.objectToBind[this.propertyToBind].

	propertyToMatch?: string; // property in this.objectToMatch

	max?: number; // max value allowed if this.type is 'number'

	min?: number; // min value allowed if this.__type is 'number'

	maxLength?: number; // if this.__type is 'text' or 'password'

	minLength?: number; // if this.__type is 'text' or 'password'
	


# ValidatingInputService

Abstract class representing a single `ValidatingInput`.

# ValidatingInputsService

Abstract class representing a `ValidatingInput` array.

# ValidatingNumberInputService

Abstract class, implements `ValidatingInputService`

# ValidatingPasswordInputService

Abstract class, implements `ValidatingInputService`

# ValidatingTextInputService

Abstract class, implements `ValidatingInputService`

# InputValidatorService

Validates a `ValidatingInput`. If `ValidatingInput.isValid` is array of functions,  
they are called in the order listed.

# ValidatingFormInputComponent

Abstract UI component class, representing a `ValidatingInput` in UI.

# ValidatingFormInputsComponent

Abstract UI component class, representing a `ValidatingInput` array in UI.

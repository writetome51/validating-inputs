import { CanBeValidated } from './can-be-validated';
import { ValidatingInput } from './validating-input';


export declare abstract class ValidatingInputService implements CanBeValidated {

	data: ValidatingInput;
	error: string;


	isValid(): boolean;


	getValue(): any;
}

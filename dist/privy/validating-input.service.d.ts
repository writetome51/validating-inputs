import { ValidatingInput } from './validating-input';


export declare abstract class ValidatingInputService {

	data: ValidatingInput;
	error: string;

	isValid(): boolean;

}

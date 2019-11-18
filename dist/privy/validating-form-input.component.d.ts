import { ValidatingInput } from './validating-input';
import { ValidatingInputService } from './validating-input.service';


export declare abstract class ValidatingFormInputComponent {

	private __validatingInput;


	constructor(__validatingInput: ValidatingInputService);


	readonly input: ValidatingInput;

}

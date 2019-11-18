import { ValidatingInput } from './validating-input';
import { ValidatingInputService } from './validating-input.service';
import { __getDefaultNumberInput } from './__get-input.functions';


// Framework independent

export abstract class ValidatingNumberInputService implements ValidatingInputService {

	data: ValidatingInput = __getDefaultNumberInput();

}

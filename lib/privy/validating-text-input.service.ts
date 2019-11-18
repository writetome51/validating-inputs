import { ValidatingInput } from './validating-input';
import { ValidatingInputService } from './validating-input.service';
import { __getDefaultTextInput } from './__get-input.functions';


// Framework independent

export abstract class ValidatingTextInputService implements ValidatingInputService {

	data: ValidatingInput = __getDefaultTextInput();

}

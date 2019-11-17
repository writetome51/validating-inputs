import { ValidatingInput } from './validating-input';
import { ValidatingInputService } from './validating-input.service';
import { getDefaultNumberInput } from './privy/get-input.functions';


// Framework independent

export abstract class ValidatingNumberInputService implements ValidatingInputService {

	data: ValidatingInput = getDefaultNumberInput();

}

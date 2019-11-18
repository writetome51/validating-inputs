import { ValidatingInput } from './validating-input';
import { ValidatingInputService } from './validating-input.service';
import { __getDefaultPasswordInput } from './__get-input.functions';


export abstract class ValidatingPasswordInputService implements ValidatingInputService {

	data: ValidatingInput = __getDefaultPasswordInput();

}

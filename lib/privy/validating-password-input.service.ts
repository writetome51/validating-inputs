import { ValidatingInputService } from './validating-input.service';
import { __getDefaultTypeInput } from './__get-input.functions';


export abstract class ValidatingPasswordInputService extends ValidatingInputService {

	data = __getDefaultTypeInput('password');

}

import { ValidatingInputService } from './validating-input.service';
import { __getDefaultTypeInput } from './__get-input.functions';


export abstract class ValidatingTextInputService extends ValidatingInputService {

	data = __getDefaultTypeInput('text');

}

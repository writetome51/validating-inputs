import { ValidatingInput } from './validating-input';
import { ValidatingInputsService } from './validating-inputs.service';


export declare abstract class ValidatingFormInputsComponent {

	private __validatingInputs;


	constructor(__validatingInputs: ValidatingInputsService);


	get inputs(): ValidatingInput[];

}

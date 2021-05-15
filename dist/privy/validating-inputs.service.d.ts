import { PublicArrayContainer } from '@writetome51/public-array-container';
import { ValidatingInput } from './validating-input';
import { ValidatingInputService } from './validating-input.service';
import { CanBeValidated } from './can-be-validated';


export declare abstract class ValidatingInputsService extends PublicArrayContainer
	implements CanBeValidated {

	data: ValidatingInput[];
	error: string;


	constructor(...inputs: ValidatingInputService[]);


	isValid(): boolean;


	getValue(): any[];
}

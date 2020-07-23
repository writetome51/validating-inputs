import { PublicArrayContainer } from '@writetome51/public-array-container';
import { ValidatingInput } from './validating-input';
import { ValidatingInputService } from './validating-input.service';


export declare abstract class ValidatingInputsService extends PublicArrayContainer {

	data: ValidatingInput[];
	error: string;

	constructor(...inputs: ValidatingInputService[]);

	areValid(): boolean;

}

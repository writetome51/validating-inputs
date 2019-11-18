import { ValidatingInput } from './validating-input';
import { ValidatingInputsService } from './validating-inputs.service';


/***********
In Angular, intended to be used with ValidatingInputsComponent:
To use, create a subclass and attach @Component to it, like so:

 @Component({
    selector: 'example-form-inputs',

    // write this exactly as-is:
    template: `<validating-inputs [inputs]="inputs"></validating-inputs>`
})
export class ExampleFormInputsComponent extends ValidatingFormInputsComponent {...}
 **********/
export declare abstract class ValidatingFormInputsComponent {

	private __validatingInputs;


	constructor(__validatingInputs: ValidatingInputsService);


	readonly inputs: ValidatingInput[];

}

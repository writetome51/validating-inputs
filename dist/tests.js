import {ValidatingTextInputService} from './privy/validating-text-input.service.js';


export const ObjectToBind = {property: '-'}


export class TestInputService extends ValidatingTextInputService {

	constructor() {
		super();
		this.data.objectToBind = ObjectToBind;
		this.data.propertyToBind = 'property';
		this.data.isValid = () => this.data.objectToBind[this.data.propertyToBind].length > 0;
	}
}


let input = new TestInputService();
if (input.isValid()) console.log('test passed')
else console.log('test FAILED');

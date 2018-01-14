import { javascriptPrimitives, htmlPrimitives, InputType } from './primitives';

export class InputObject {
    name: string;
    inputs: InputType[];
    
    constructor({name,inputs}) {
	this.name = name;
	this.inputs = inputs;
    }
}

export const javascriptPrimitives = {
    'Boolean': Boolean,
    'null' : null,
    'undefined': undefined,
    'Number': Number,
    'String': String,
    'Symbol': Symbol,
    'Object': Object
};

export const htmlPrimitives = {
    //html input type's, form logic types (button, reset, submit) not included
    //q -> quantity of js primitives contained
    'checkbox': {'js':'Boolean', 'q': 1},
    'color': {'js':'Number', 'q': 1},
    'date': {'js':'Number', 'q': 1},
    'datetime-local': {'js':'Number', 'q': 1},
    'email': {'js':'String', 'q': 1},
    'file': {'js':'String', 'q': 1},
    'image': {'js':'String', 'q': 1},
    'month': {'js':'Number', 'q': 1},
    'number': {'js':'Number', 'q': 1},
    'password': {'js':'String', 'q': 1},
    'radio': {'js':['Boolean','String'], 'q': 2},
    'range': {'js':['Number','Number'], 'q': 2},
    'tel': {'js':'String', 'q': 1},
    'text': {'js':'String', 'q': 1},
    'time': {'js':'Number', 'q': 1},
    'url': {'js':'String', 'q': 1},
    'week': {'js':'Number', 'q': 1}
};

export class InputType {
    name: string;
    hype: string; //hobject type
    primitive: boolean;
    required: boolean;
    choices: string[];
    quantity: number;

    constructor({name, hype,
		 primitive = true,
		 required = true,
		 choices = [],
		 quantity = 1
		 }) {
	this.name = name;
	this.hype = hype;
	this.primitive = primitive;
	this.required = required;
	this.choices = choices;
	this.quantity = quantity;
    }
}

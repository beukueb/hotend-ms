import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

import { FormGroup, FormControl, Validators } from '@angular/forms';


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

class InputType {
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

class InputObject {
    name: string;
    inputs: InputType[];
    
    constructor({name,inputs}) {
	this.name = name;
	this.inputs = inputs;
    }
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

    db: AngularFireDatabase;
    primitives: Observable<any>;    // HTML input primitives
    primitivesRef: AngularFireObject<any>;
    primitiveNames: String[];
    primitivesList: any;
    hobjectdefs: Observable<any[]>; // HTML input object definitions
    hobjectdefsRef: AngularFireList<any>;
    newhobjectdef: InputObject;
    hotends: Observable<any[]>;     // HTML input object instances
    
    constructor(db: AngularFireDatabase) {
	this.primitivesList = [];
	this.primitiveNames = [];
	this.primitivesRef = db.object('input_primitives');
	this.primitives = this.primitivesRef.valueChanges();
	this.hobjectdefsRef = db.list('input_object_definitions');
	this.hobjectdefs = this.hobjectdefsRef.valueChanges();
	this.newhobjectdef = new InputObject({name:'',inputs:[new InputType({name:'',hype:''})]});
    }

    ngOnInit() {
	// Check if hot primitives are defined
	this.primitives.subscribe(
	    v => {
		if (!v) this.primitivesRef.set(htmlPrimitives);
		this.primitivesList = Object.entries(v);
		this.primitiveNames = Object.keys(v);
		console.log(this.primitiveNames);
	    }
	);
    }

    addInput() {
	this.newhobjectdef.inputs.push(new InputType({name:'',hype:''}));
    }

    submitInputDef() {
	console.log(this.newhobjectdef);
	this.hobjectdefsRef.push(this.newhobjectdef)
	this.newhobjectdef = new InputObject({name:'',inputs:[new InputType({name:'',hype:''})]});
    }

}

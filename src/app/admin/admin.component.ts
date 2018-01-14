import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

import { FormGroup, FormControl, Validators } from '@angular/forms';

// Services
import { PrimitivesService } from '../hotservices/primitives.service';
import { HotendsService } from '../hotservices/hotends.service';
import { RenderTemplateFunctionsService } from '../hotservices/render-template-functions.service';

import { javascriptPrimitives, htmlPrimitives, InputType } from '../hotservices/primitives';
import { InputObject } from '../hotservices/hotends';


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
    renderFunctions: any;
    
    constructor(db: AngularFireDatabase, private _renderService: RenderTemplateFunctionsService) {
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
	    }
	);
	this.renderFunctions = this._renderService.getRenderFunctions();
	console.log(this.renderFunctions);
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

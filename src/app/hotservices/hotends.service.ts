import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

import { InputType } from './primitives';
import { InputObject } from './hotends';

@Injectable()
export class HotendsService {
    hobjectdefs: Observable<any[]>; // HTML input object definitions
    hobjectdefsRef: AngularFireList<any>;
    newhobjectdef: InputObject;
    hotends: Observable<any[]>;     // HTML input object instances

    constructor(private _db: AngularFireDatabase) {
	this.hobjectdefsRef = _db.list('input_object_definitions');
	this.hobjectdefs = this.hobjectdefsRef.valueChanges();
	this.newhobjectdef = new InputObject({name:'',inputs:[new InputType({name:'',hype:''})]});
    }
    
    addInput() {
	this.newhobjectdef.inputs.push(new InputType({name:'',hype:''}));
    }

    submitInputDef() {
	//console.log(this.newhobjectdef);
	this.hobjectdefsRef.push(this.newhobjectdef)
	this.newhobjectdef = new InputObject({name:'',inputs:[new InputType({name:'',hype:''})]});
    }
}

// this service provides both the hotend types and functions to add/retrieve content linked to those types
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

import { InputType } from './primitives';
import { InputObject } from './hotends';

@Injectable()
export class HotendsService {
    hobjectdefMap: String[]; //Map<String,InputObject>; => not allowed when targeting ES5
    hobjectdefList: InputObject[];
    hobjectdefs: Observable<any[]>; // HTML input object definitions
    hobjectdefsRef: AngularFireList<any>;
    newhobjectdef: InputObject;
    hotends: Observable<any[]>;     // HTML input object instances

    constructor(private _db: AngularFireDatabase) {
	// types
	this.hobjectdefsRef = _db.list('input_object_definitions');
	this.hobjectdefs = this.hobjectdefsRef.valueChanges();
	this.newhobjectdef = new InputObject({name:'',inputs:[new InputType({name:'',hype:''})]});
	this.hobjectdefMap = []; //Map();
	this.hobjectdefList = [];

	_db.database.ref(".info/connected").on("value", snap => {
	    if (snap.val() === true) { // connected to firebase
		this.hobjectdefs.subscribe(
		    v => {
			localStorage.setItem('input_object_definitions', JSON.stringify(v));
			this.hobjectdefMap = v.map(i => i['name']);
			this.hobjectdefList = v.map(
			    i => new InputObject({
				name: i['name'],
				inputs: i['inputs'].map(j => new InputType(j))}));
			   
			console.log(this.hobjectdefMap);
		    });
	    } else { // not connected to firebase
		let v = JSON.parse(localStorage.getItem('input_object_definitions'));
		/*for (let hobjectdef of v) {
		    this.hobjectdefMap.set(
			hobjectdef['name'],
			new InputObject({name:hobjectdef['name'],
					 inputs:hobjectdef['inputs'].map(i => new InputType(i))
					}));
		}*/
	    }
	});
    }

    // hotend type functions
    addInput() {
	this.newhobjectdef.inputs.push(new InputType({name:'',hype:''}));
    }

    submitInputDef() {
	//console.log(this.newhobjectdef);
	this.hobjectdefsRef.push(this.newhobjectdef)
	this.newhobjectdef = new InputObject({name:'',inputs:[new InputType({name:'',hype:''})]});
    }

    retrieveHype(name) {
	return this.hobjectdefList[this.hobjectdefMap.indexOf(name)];
    }

    // hotend content functions
    addHotend(hotend) {
	console.log('here hotend will be added');
    }

    retrieveHotend(name) {
	console.log('here hotend will be retrieved');
    }
}
